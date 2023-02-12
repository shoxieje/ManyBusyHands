
const db = require('./db');

async function retrieveAwards() {

    const result = await db.query(

        `SELECT * FROM awards`

    )

    return result

}


async function retrieveAwardsByName(name) {

    const result = await db.query(

        `SELECT * FROM awards WHERE award_name = "${name}"`

    )

    return result

}

module.exports = {

    retrieveAwards,
    retrieveAwardsByName

}