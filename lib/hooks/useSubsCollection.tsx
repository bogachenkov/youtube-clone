import { useSubscriptionsStore } from "@lib/store";
import { useVideoCollection } from "./useVideoCollection";

export const useSubsCollection = () => {
  const { data, isLoading } = useVideoCollection();
  const subscriptions = useSubscriptionsStore(store => store.subscriptions);

  if (!data || isLoading) return [];

  return data.filter(v => subscriptions.includes(v.snippet.channelId));
}