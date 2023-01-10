
const db = require('./db');

async function addBusinessUser(user) {

    const result = await db.query( 

        `INSERT INTO business_user_detail (user_email, first_name, last_name, business_name, ABN, title, address, user_role,
            landline_number, phone_number, website, activity_1_id, activity_2_id, activity_3_id, activity_4_id, activity_5_id,
            main_activities, photos, busiest_months) VALUES ('${user.userEmail}', '${user.firstName}', '${user.lastName}', 
            '${user.businessName}', '${user.ABN}', '${user.title}', '${user.address}', '${user.userRole}', '${user.landlineNumber}',
            '${user.phoneNumber}', '${user.website}', '${user.activity1}', '${user.activity2}', '${user.activity3}', '${user.activity4}',
            '${user.activity5}', '${user.mainActivities}', '${user.photos}', '${user.busiestMonths}');`
    );

    let msg = 'Error in creating business user';

    if(result.affectedRows) {

        msg = 'Business user created successfully';

    }

    return {msg};


}

async function retrieveBusinessUser() {

    const result = await db.query(

        `SELECT * FROM business_user_detail;`

    )

    return result;

}


async function retrieveBusinessUserByEmail(userEmail) {

    const result = await db.query(

        `SELECT * FROM business_user_detail WHERE user_email = '${userEmail}';`

    )

    return result;

}


async function remove(userEmail) {

    const result = await db.query(

        `DELETE FROM business_user_detail WHERE user_email = '${userEmail}'`

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