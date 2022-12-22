
const db = require('./db');

async function addBusinessUser(user) {

    console.log(user);

    const result = await db.query( 

        `INSERT INTO businessUserDetails (userEmail, firstName, lastName, businessName, ABN, title, address, userRole,
            phoneNumber, website, mainActivities, photos, busiestMonths, casualLabors, promotion, postJob) VALUES 
        ('${user.userEmail}', '${user.firstName}', '${user.lastName}', '${user.businessName}', '${user.ABN}', '${user.title}',
        '${user.address}', '${user.userRole}', '${user.phoneNumber}', '${user.website}', '${user.mainActivities}',
        '${user.photos}', '${user.busiestMonths}', '${user.casualLabors}', '${user.promotion}', '${user.postJob}');`

    );


    let msg = 'Error in creating business user';

    if(result.affectedRows) {

        msg = 'Business user created successfully';

    }

    return {msg};


}

async function retrieveBusinessUser() {

    const result = await db.query(

        `SELECT * FROM businessUserDetails;`

    )

    return result;

}


async function retrieveBusinessUserByEmail(userEmail) {

    const result = await db.query(

        `SELECT * FROM businessUserDetails WHERE userEmail='${userEmail}';`

    )

    return result;

}


async function remove(userEmail) {

    const result = await db.query(

        `DELETE FROM businessUserDetails WHERE userEmail = '${userEmail}'`

    )

    return result;

}

async function updateBusinessUserDetails(userEmail, info) {

    const result = await db.query(

        `UPDATE businessUserDetails SET firstName = '${info.firstName}', lastName = '${info.lastName}', businessName = '${info.businessName}',
        ABN = '${info.ABN}', title = '${info.title}', address = '${info.address}', userRole = '${info.userRole}', phoneNumber = '${info.phoneNumber}',
        website = '${info.website}', mainActivities = '${info.mainActivities}', photos = '${info.photos}', busiestMonths = '${info.busiestMonths}',
        casualLabors = '${info.casualLabors}', promotion = '${info.promotion}', postJob = '${info.postJob}'
        WHERE userEmail = '${userEmail}';`

    )

    let msg = "Error updating business user's detail";

    if(result.affectedRows) {

        msg = `Update user ${userEmail} successfully`;

    }

    return {msg};

}


module.exports = {

    addBusinessUser,
    retrieveBusinessUser,
    retrieveBusinessUserByEmail,
    updateBusinessUserDetails,
    remove


}