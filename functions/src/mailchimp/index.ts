import { updateSubscriberListService } from './service';
import * as functions from 'firebase-functions';

export const updateNewsletterList = async (email, first, last, company) => {
  const listId = functions.config().mailchimp.listid;
  const res = await updateSubscriberListService(email, first, last,company, listId);
  return res;
};

export const updateSubscrptionList = async (email, first, last, company) => {
  const listId = functions.config().mailchimp.subscriptionlistid;
  const res = await updateSubscriberListService(email, first, last,company, listId);
  return res;
};
