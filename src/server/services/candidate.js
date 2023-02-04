
const db = require('./db');

async function createCandidate(details) {

    const result = await db.query(

        `INSERT INTO candidate (user_email, jobID, candidate_resume, cover_letter,
            date_created, isHired, isFavorite) VALUES ('${details.user_email}',
            '${details.jobID}', '${details.candidate_resume}', '${details.cover_letter}',
            '${details.date_created}', '${details.isHired}', '${details.isFavorite}')`

    )

    let msg = 'Error in creating candidate';

    if(result.affectedRows) {

        msg = 'Candidate created successfully';

    }

    return {msg};
}

async function retrieveJobByID(id) {

    const result = await db.query(
        `SELECT * FROM candidate WHERE jobID = '${id}'`
    )

    return result

}


async function makeFavorite(email, isFavorite) {

    let x = 0
    if(isFavorite == "true") {
        x = 1
    }

    const result = await db.query(

        `UPDATE candidate SET isFavorite = ${x} WHERE user_email = '${email}';`

    )

    return "SET FAVORITE"

}


module.exports = {

    createCandidate,
    retrieveJobByID,
    makeFavorite

}