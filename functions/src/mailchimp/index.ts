import { updateSubscriberListService } from './service';

export const updateSubscriberList = async (email, first, last) => {
  const res = await updateSubscriberListService(email, first, last);
  return res;
};
