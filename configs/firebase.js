const admin = require('firebase-admin');

const serviceAccount = require('../privateKey');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://to-do-list-afa5e-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = admin.database();
module.exports = db;
