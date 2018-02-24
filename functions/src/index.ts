import * as functions from 'firebase-functions';
import { updateSubscriberList } from './mailchimp';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const mailChimSignup = functions.https.onRequest((request, response) => {
  // updateSubscriberList();
  
  response.send("might work?")
});
