
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

        `UPDATE business_user_detail SET first_name = '${info.firstName}', last_name = '${info.lastName}', business_name = '${info.businessName}',
        ABN = '${info.ABN}', title = '${info.title}', address = '${info.address}', user_role = '${info.userRole}', landline_number = '${info.landlineNumber}',
        phone_number = '${info.phoneNumber}', website = '${info.website}', activity_1_id = ${info.activity1}, activity_2_id = ${info.activity2}, 
        activity_3_id = ${info.activity3}, activity_4_id = ${info.activity4}, activity_5_id = ${info.activity5}, main_activities = '${info.mainActivities}', 
        photos = '${info.photos}', busiest_months = '${info.busiestMonths}' WHERE user_email = '${userEmail}';`

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