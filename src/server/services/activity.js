
const db = require('./db');

async function addActivity(activity) {

    const result = await db.query( 

        `INSERT INTO activity (activity_name) VALUES ("${activity.activityName}");`

    );

    let msg = 'Error in creating activity';

    if(result.affectedRows) {

        msg = 'Activity created successfully';

    }

    return {msg};
}

async function retrieveActivity() {
    const result = await db.query(

        `SELECT * FROM activity;`

    )

    return result;
}

async function remove(id) {

    const result = await db.query(

        `DELETE FROM activity WHERE activity_id = '${id}'`

    )

    return result;

}

module.exports = {

    addActivity,
    retrieveActivity,
    remove

}