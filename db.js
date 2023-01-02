

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