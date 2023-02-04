
const db = require('./db');

async function retrieveCandidateDetail(user_email) {

    const result = await db.query(

        `SELECT first_name, last_name, dob, introduction, phone_number from job_seeker_user_detail WHERE user_email = '${user_email}'; `

    )

    return result;

}


module.exports = {

    retrieveCandidateDetail

}