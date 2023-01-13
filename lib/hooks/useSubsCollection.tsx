import { useSubscriptionsStore } from "@lib/store";
import { useVideoCollection } from "./useVideoCollection";

export const useSubsCollection = () => {
  const videoCollection = useVideoCollection();
  const subscriptions = useSubscriptionsStore(store => store.subscriptions);

  return videoCollection.filter(v => subscriptions.includes(v.snippet.channelId));
}