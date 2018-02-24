import { updateSubscriberListService } from './service';

export const updateSubscriberList = async () => {
  const res = await updateSubscriberListService();
  return res;
};
