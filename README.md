# cs656-node-admin

This is just something I threw together quickly to run ad hoc queries against the database.


In particular, the user admin in firebase is limited. 
There are alot more editable fields in a user account object than the console exposes.

In there shared drive there's a key file chapapplication-ed1cd-firebase-adminsdk-mgor0-39faaa50e8.json

You'll need to put this in your home directory to be able to connect to the db.

Install node.js : https://nodejs.org/en/download/

Run once to install some dependencies:

sudo npm install express-generator -g

sudo npm install pug -g

sudo npm install firebase-admin -g



cd chat-node-admin

npm install # run once

Start up the server:

DEBUG=chat-admin-nod:* npm start
