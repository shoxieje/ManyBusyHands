

let user =  `CREATE TABLE if not exists user(userID int primary key auto_increment, user_email varchar(255) unique, 
            user_password varchar(255), user_type ENUM('JOB SEEKER', 'BUSINESS', 'MANAGER'));`

let activity = `CREATE TABLE if not exists activity(activity_id int primary key auto_increment, activity_name varchar(255));`

let businessUserDetails = `CREATE TABLE if not exists business_user_detail(user_email varchar(255) primary key, foreign key(user_email) references user(user_email), first_name varchar(255), last_name varchar(255),
                        business_name varchar(255), ABN varchar(255), title varchar(10), address varchar(255), user_role varchar(255), landline_number varchar(255), phone_number varchar(255), website varchar(255),
                        activity_1_id int, foreign key(activity_1_id) references activity(activity_id),
                        activity_2_id int, foreign key(activity_2_id) references activity(activity_id),
                        activity_3_id int, foreign key(activity_3_id) references activity(activity_id),
                        activity_4_id int, foreign key(activity_4_id) references activity(activity_id),
                        activity_5_id int, foreign key(activity_5_id) references activity(activity_id),
                        main_activities longtext, photos varchar(255), busiest_months varchar(255));`

/*

CREATE TABLE if not exists job_ad(jobID int primary key auto_increment, random_url_job_id varchar(36), created_by varchar(255) NOT NULL, title varchar(255), industry varchar(255), 
							ssc_code int(11) unsigned, pay_from int, pay_to int, ad_plan varchar(100), headline varchar(255), job_description longtext, image varchar(255), 
                            job_status ENUM('ACTIVE', 'INACTIVE', 'DRAFT'), inactive_date datetime, date_created datetime, foreign key(created_by) references business_user_detail(user_email),
                            foreign key(ssc_code) references postcodes(ssc_code));
                            
CREATE TABLE if not exists job_seeker_user_detail(user_email varchar(255) primary key, foreign key(user_email) references user(user_email), last_name varchar(255),
							first_name varchar(255), phone_number varchar(255), visa_type varchar(255), no_of_jobs_applied int, successful_jobs int);

CREATE TABLE if not exists candidate(user_email varchar(255), jobID int, resume varchar(255), cover_letter varchar(255), date_created datetime, isHired ENUM('YES','NO'),
						primary key(user_email, jobID), foreign key(user_email) references job_seeker_user_detail(user_email) on delete cascade,
                        foreign key(jobID) references job_ad(jobID) on delete cascade);

CREATE TABLE if not exists user_session(session_token varchar(255) primary key, user_name varchar(255), expires_at datetime);


*/

