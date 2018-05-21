import * as functions from 'firebase-functions';
import { updateNewsletterList, updateSubscrptionList } from './mailchimp';
const cors = require('cors')({origin: true});

export const mailChimSignup = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const company = request.body.company || '';
    const result = await updateNewsletterList(request.body.email_address, request.body.firstname, request.body.lastname, company);
    return response.send(result)
  });
});

export const subscriptionSignup = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const company = request.body.company || '';
    const result = await updateSubscrptionList(request.body.email_address, request.body.firstname, request.body.lastname, company);
    return response.send(result)
  });
});
