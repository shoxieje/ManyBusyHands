
const db = require('./db');

async function createJobAd(adDetail) {

    const result = await db.query(

        `INSERT INTO job_ad (random_url_job_id, created_by, title, industry, suburb, postcode, state, pay_from,
            pay_to, ad_plan, headline, job_description, image, job_status, inactive_date, date_created)
            VALUES ('${adDetail.uuidURL}', '${adDetail.created_by}', '${adDetail.title}','${adDetail.industry}',
            '${adDetail.suburb}', '${adDetail.postcode}', '${adDetail.state}',  ${adDetail.pay_from},
            ${adDetail.pay_to}, '${adDetail.ad_plan}', '${adDetail.headline}', '${adDetail.job_description}',
            '${adDetail.image}', '${adDetail.job_status}', '${adDetail.inactive_date}', '${adDetail.date_created}')`

    )

    let msg = 'Error in creating job ad';

    if(result.affectedRows) {

        msg = 'Job ad created successfully';

    }

    return {msg};

}

async function inActivateJobAd(jobAd) {

    const result = await db.query(

        `UPDATE job_ad SET job_status = 'INACTIVE', inactive_date = '${jobAd.date}'
        WHERE random_url_job_id = '${jobAd.id}'`

    );

    let msg = 'Error in inactivating job ad';

    if(result.affectedRows) {

        msg = 'Inactivate job ad successfully';

    }

    return {msg};

}

// either update from draft, edit or reactivate the ad
async function editJobAd(jobAd) {

    const result = await db.query(

        `UPDATE job_ad SET title = '${jobAd.title}', industry = '${jobAd.industry}', suburb = '${jobAd.suburb}',
        postcode = '${jobAd.postcode}', state = '${jobAd.state}', pay_from = '${jobAd.pay_from}', pay_to = '${jobAd.pay_to}',
        ad_plan = '${jobAd.ad_plan}', job_description = '${jobAd.job_description}', image = '${jobAd.image}',
        job_status = '${jobAd.job_status}', date_created = '${jobAd.date_created}' WHERE random_url_job_id = '${jobAd.id}'`

    )

    let msg = 'Error in editing job ad';

    if(result.affectedRows) {

        msg = 'Edited job ad successfully';

    }

    return {msg};

}


async function remove(jobID) {

    const result = await db.query(

        `DELETE FROM job_ad WHERE random_url_job_id = '${jobID}'`

    )

    return result;

}

async function retrieveAdByType(type, user) {

    const result = await db.query(

        `SELECT * FROM job_ad WHERE created_by = '${user}' AND job_status = '${type}'`

    )

    return result
}


async function retrieveAdByUUID(uuid) {


    const result = await db.query(

        `SELECT * FROM job_ad WHERE random_url_job_id = '${uuid}'`

    )

    return result

}

module.exports = {

    createJobAd,
    inActivateJobAd,
    editJobAd,
    remove,
    retrieveAdByType,
    retrieveAdByUUID

}
