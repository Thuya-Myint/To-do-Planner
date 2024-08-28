const admin = require('firebase-admin');

const serviceAccount = require('../../../private key/to-do-list-afa5e-firebase-adminsdk-e2z5d-28069301cd.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://to-do-list-afa5e-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = admin.database();
module.exports = db;
