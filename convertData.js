const { json } = require("express");
const fs = require("fs");
const readline = require("readline");
const axios = require("axios");

let activity = [];

async function processByLine() {
    const fileStream = fs.createReadStream("farm_business.txt");

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        let tempActivities = [];

        if (line.includes("/")) {
            tempActivities = line.split("/");

            for (let x of tempActivities) {
                let xx = x.trim().split(" ");

                if (xx.length >= 2) {
                    if (
                        (xx[0].startsWith("Au") || xx[0].startsWith["au"]) &&
                        (xx[1].startsWith("S") || xx[1].startsWith("s"))
                    ) {
                        x = "Australian Stock Horse";
                    }
                }

                addToActivity(x.trim());
            }
        } else {
            addToActivity(line);
        }
    }

    console.log(activity.length);

    for (const x of activity) {
        await axios.post(
            `http://localhost:8081/activity`,
            new URLSearchParams({
                activityName: x,
            }),
            {
                Accept: "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        );
    }

    // let json_activity = JSON.stringify(activity);
    // fs.writeFileSync('dataField.json', json_activity);
}

function addToActivity(value) {
    const splitWords = value
        .split(" ")
        .filter((e) => {
            return e !== "" && e !== ".";
        })
        .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");

    if (!activity.includes(splitWords)) {
        activity.push(splitWords);
    }
}

processByLine();
