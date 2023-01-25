
const db = require('./db');

async function addUser(user) {

    const result = await db.query( 

        `INSERT INTO user (user_email, user_password, user_type) VALUES 
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

        `SELECT * FROM user WHERE user_email = '${userEmail}';`

    )

    return result;

}

async function retrieveUserByType(type) {

    const result = await db.query(

        `SELECT * FROM user WHERE user_type='${type}';`

    )

    return result;

}

async function remove(userEmail) {

    const result = await db.query(

        `DELETE FROM user WHERE user_email = '${userEmail}'`

    )

    return result;

}

async function updateUserPassword(userEmail, info) {

    const result = await db.query(

        `UPDATE user SET user_password = '${info.password}'
        WHERE user_email = '${userEmail}';`

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