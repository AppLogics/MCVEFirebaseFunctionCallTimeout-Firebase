import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const firestore: FirebaseFirestore.Firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true});

exports.endpoint = functions.region("europe-west1").https.onCall(async (data, context) => {
    function sleep(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }
    await sleep(data.timeout);
    return `Hello after ${data.timeout} milliseconds!`;
});