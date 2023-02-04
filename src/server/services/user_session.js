
const db = require('./db');


async function createSessionToken(session) {

    const result = await db.query(

        `INSERT INTO user_session (session_token, user_name, expires_at) VALUES ('${session.session_token}',
            '${session.userName}', '${session.expiresAt}')`

    )

    let msg = 'Error in creating session';

    if(result.affectedRows) {

        msg = 'Session created successfully';

    }

    return {msg};
}

async function retrieveSessionToken(sessionToken) {

    const result = await db.query(

        `SELECT * FROM user_session WHERE session_token = '${sessionToken}'`

    )

    return result;

}


async function deleteSessionToken(sessionToken) {

    const result = await db.query(

        `DELETE FROM user_session WHERE session_token = '${sessionToken}'`

    )

    return result

}


module.exports = {

    createSessionToken,
    retrieveSessionToken,
    deleteSessionToken

}
