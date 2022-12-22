

let user =  `CREATE TABLE if not exists user(userID int primary key auto_increment, userEmail varchar(255) unique, 
                    userPassword varchar(255), userType ENUM('JOB SEEKER', 'BUSINESS', 'MANAGER'));`

let businessUserDetails = `CREATE TABLE if not exists businessUserDetails(userEmail varchar(255) primary key, foreign key(userEmail) references user(userEmail), firstName varchar(255), lastName varchar(255),
                        businessName varchar(255), ABN varchar(255), title varchar(10), address varchar(255), userRole varchar(255), phoneNumber varchar(255), website varchar(255),
                        mainActivities longtext, photos varchar(255), busiestMonths varchar(255), casualLabors varchar(10), promotion varchar(10), postJob varchar(255));`

