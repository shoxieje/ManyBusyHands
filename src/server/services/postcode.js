const db = require('./db');

async function retrievePostcode() {

    const result = await db.query(

        `SELECT suburb, postcode, state FROM postcodes`

    )

    return result
}


module.exports = {

    retrievePostcode


}