import * as functions from 'firebase-functions';
import { updateSubscriberList } from './mailchimp';
const cors = require('cors')({origin: true});

export const mailChimSignup = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const result = await updateSubscriberList(request.body.email_address, request.body.firstname, request.body.lastname);
    return response.send(result)
  });
});
