
const db = require('./db');

async function addUser(user) {

    const result = await db.query( 

        `INSERT INTO user (userEmail, userPassword, userType) VALUES 
        ('${user.userEmail}', '${user.userPassword}', '${user.userType}');`

    );

    let msg = 'Error in creating user';

    if(result.affectedRows) {

        msg = 'User created successfully';

    }

    return {msg};


}

async function retrieveUser() {

    const result = await db.query(

        `SELECT * FROM user;`

    )

    return result;

}


async function retrieveUserByEmail(userEmail) {

    const result = await db.query(

        `SELECT * FROM user WHERE userEmail='${userEmail}';`

    )

    return result;

}

async function retrieveUserByType(type) {

    const result = await db.query(

        `SELECT * FROM user WHERE userType='${type}';`

    )

    return result;

}

async function remove(userEmail) {

    const result = await db.query(

        `DELETE FROM user WHERE userEmail = '${userEmail}'`

    )

    return result;

}

async function updateUserPassword(userEmail, info) {

    const result = await db.query(

        `UPDATE user SET userPassword = '${info.password}'
        WHERE userEmail = '${userEmail}';`

    )

    let msg = "Error updating user's password";

    if(result.affectedRows) {

        msg = `Update user ${userEmail} successfully`;

    }

    return {msg};

}


module.exports = {

    addUser,
    retrieveUser,
    retrieveUserByEmail,
    retrieveUserByType,
    updateUserPassword,
    remove


}