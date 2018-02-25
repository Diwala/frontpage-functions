const rp = require('request-promise');
import * as functions from 'firebase-functions';

const mailchimpInstance   = 'us17',
      listUniqueId        = functions.config().mailchimp.listid,
      mailchimpApiKey     = functions.config().mailchimp.apikey;

export const updateSubscriberListService = async (email, first, last) => {
  const mail = email
  const firstName = first
  const lastName = last
  const url = 'https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/';
  const auth = 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64');
  const options = {
    method: 'POST',
    uri: url,
    headers: {
        'User-Agent': 'Request-Promise',
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': auth
    },
    json: true,
    body: {
      'email_address': mail,
      'status': 'subscribed',
      'merge_fields': {
        'FNAME': firstName,
        'LNAME': lastName
      }
    }
  };

  try {
    const res = await rp(options)
    return {message:'ok', ok:true};
  } catch (e) {
    if(e.statusCode === 400) {
      if(e.error.title === 'Member Exists') {
        return {message: 'EXISTING_MEMBER', ok:false}
      }
    }
    return {message: 'GENERAL_ERROR', ok:false}
  }

};
