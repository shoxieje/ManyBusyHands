# **MANYBUSYHANDS Project Details**

**Project Title:** ManyBusyHands website

**Project Description:** This project aims to develop a website for connecting regional businesses and accommodation providers to job seekers to help secure seasonal workers in regional Australia.

**Delivery Date:** 15/10/2021 & 11/10/2022

**UNE units participated in:** COSC595 T2 2021 & COSC595 T2 2022

**Staged front end project publicly hosted at:** [manybusyhands.website](manybusyhands.website)

**GitLab Repo Wiki page:**(gitlab-wiki)[https://gitlab.une.edu.au/manybusyhands/cosc595-manybusyhands/-/wikis/home]

**Project Location:** Australia

**Status:** Overhauled front-end UI/UX & Analytics

---

## **Project Stakeholders**

- **Project Owner:** GEOFF QUINN
- **Unit Coordinator:** UNIT COORDINATOR – DR EDMUND SADGROVE
- **2021 Project Team Members:**

  - Callum Sandercock
  - Jeroprakash Gnanaprakasam
  - Feng Qian
  - Gordon Conry

- **2022 Project Team Members:**
  - Salim Jordan
  - Jesse Chow
  - Shirley Li
  - Ahmad Gul Hundal

---

## **Project Server Requirements to serve Front End**

To install the necessary requirements please follow the guides below for LOCAL and HOSTED(AWS NGINX)

1. npm (7.21.0) - javascript package manager
2. NGINX - for AWS EC2 deployment ONLY (discussed in server documentation) - Amazon Web Services Elastic Computing
3. all packages listed in file 'package.json' under 'devDependencies' - explained in installation instructions

---

## **Program folder Structure**

```text
project_root
| - public
| - src
|   | - assets
|   |   | - styles
|   |   | - img
|   |   |   | - logos
|   |   |   | - caption
|   | - components
|   | - router
|   | - store
|   | - views
|   | - App.vue
|   | - main.js
| - .editorConfig
| - babel.config.js
| - package-lock.json
| - README.md
| - vue.config.js
```

---

# **Project Tech Stack**

- **DATABASE:** MySQL
- **SERVER:** PLAY(JAVA)
- **FRONT-END:** VUE.JS, CSS, HTML

### **Languages Used in Front End**

- HTML
- CSS
- SASS
- JS

---

# **DEPLOYMENT AND INSTALLATION INSTRUCTIONS FOR FRONT END**

## **LOCAL instructions**

1. Ensure you have npm installed by following this (guide)[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm]
2. Once set up, make sure you have the project files
3. Open a command line interface, navigate the the project folder and enter in the command `npm install`
4. Once this has completed run the command `npm run serve`
5. This will host the website for you locally on your computer
6. If you have a locally host server to be connected to by the front-end, be sure to update the server host name in file 'src/main.js' where this is a declaration of `$BaseURI` and finally uncomment all instances of 'AXIOS' code in the front-end (please not these connections have not be integrated or tested)
7. Enjoy

## **HOSTED instructions (AWS EC2 - NGINX SPECIFIC)**

1. Ensure the project folder is uploaded into your EC2 instance
2. Ensure NGINX is operational on your EC2 instance (discussed in the server documentation)
3. Check your EC2 instance has npm installed by entering `npm -version` in a command-line interface. If not installed, please head (here)[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm]
4. Move across the project folder and its contents to this location (create the destination folder to move to if necessary): '/var/www/manybusyhands'
5. Open up a command line interface, navigate to the 'copied-to' folder and run the following command `npm install`
6. Once that is finished, enter the following command `npm run build` - this should build a `dist` folder in your project folder
7. Then ensure all NGINX configuration is correct (check '/etc/nginx/sites-available/#YOUR#SITE#NAME') - if no file is there please follow the server setup instructions from this project. If you get stuck you can also consult this (guide)[https://thucnc.medium.com/deploy-a-vuejs-web-app-with-nginx-on-ubuntu-18-04-f93860219030]
8. Make sure 'root', 'location', and 'server_name' sections in the above '/etc/nginx/sites-available/#YOUR#SITE#NAME' file (can copy from the link in step 6) point to the `dist` folder that you created in step 5 and
9. Restart NGINX by entering the command `sudo service nginx restart`
10. Providing domain hosting and NGINX config are correct, you should now be able access the website live at your intended domain

---
