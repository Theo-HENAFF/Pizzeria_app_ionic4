# Pizzeria Chitello App
## Description :
A project part of a fullStack course. We developed an ionic4 pizzeria application using REST api callbacks with Angular and Mongo data base. This application handles a static and a dynamique part and follows a responsive design. 
For this project we had multiple mile stones : 
- Pizzeria App with Menu and Daily special pages.
- The commands.
- Payment (with login).
For this command only two first milestones are accomplished.
In this app you can find multiple functionalities such as : A dynamique cart , the daily special page , Menu page , a page to handle the commands and a menu gestionary page.

## How to use it
### Prerequisite :
1. Donwload and install MongoDB: https://www.mongodb.com/ (to create the dtabase).
2. Donwload and install PostMan: https://www.getpostman.com/ (to initialise the database).
3. Donwload and install Cors in your default Navigator https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en (to let your navigator acces to your DB).
4. Download and install NodeJS https://nodejs.org/en/.

### To run the app :
1. Clone the repository
2. In the your local app repository run `npm install` command.
2. Run the following `mongod --dbpath ./data` to inisialize.
3. Add this workflow to postman https://app.getpostman.com/join-team?invite_code=5c24c9447d4bde34ee171e8ddc84f691&ws=212a851f-a193-4747-81cf-a83895b7d663 and run the commands to fill your DB.
4. Run the following commands `node app.js` and `ionic serve` to launch the app (Don't forget to activate Cors).

#### Details :
The login part is not yet implemented so application contains "hidden" admin pages. 
To get acces to it follow these links: http://localhost:8100/adminpanel // http://localhost:8100/gestion.

Enjoy :) 
Loïck Combrie , Theo Hénaff , Chiheb Nasri.
