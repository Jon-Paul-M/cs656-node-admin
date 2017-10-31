var express = require('express');
var os = require('os');
var path = require('path')
var router = express.Router();

console.log('Hi');
console.log('home: ' + os.homedir());

var keyFile = 'chapapplication-ed1cd-firebase-adminsdk-mgor0-39faaa50e8.json'
var admin = require("firebase-admin");

var serviceAccount = require(os.homedir() + path.sep + keyFile);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chapapplication-ed1cd.firebaseio.com"
});



//admin.auth().updateUser('ySBcIP7AonaX6Af5zhi1Ut8H0Wu2', {
//  displayName: "TheBrain",
//  email: 'TheBrain@breakfastclub.com'
//})
//  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
//    console.log("Successfully updated user", userRecord.toJSON());
//  })
//  .catch(function(error) {
//    console.log("Error updating user:", error);
//  });


function listAllUsers(nextPageToken) {
  // List batch of users, 1000 at a time.
  admin.auth().listUsers(1000, nextPageToken)
    .then(function(listUsersResult) {
      listUsersResult.users.forEach(function(userRecord) {
        console.log("user", userRecord.toJSON());
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken)
      }
    })
    .catch(function(error) {
      console.log("Error listing users:", error);
    });
}

// Start listing users from the beginning, 1000 at a time.
listAllUsers();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;
