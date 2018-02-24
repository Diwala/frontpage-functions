const rp = require('request-promise');

const mailchimpInstance   = 'us17',
      listUniqueId        = '16d431dbbc',
      mailchimpApiKey     = '67fd4a28b6de23322c13e2f2985f60e5-us17';

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
    if (res.status < 300 || (res.status === 400 && res.body.title === "Member Exists")) {
      return true
    } else {
      return false
    }
  } catch (e) {
    throw e;
  }

};
