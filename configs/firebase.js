require('dotenv').config();
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://to-do-list-afa5e-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = admin.database();
module.exports = db;
