import { usePlaylistStore } from "@lib/store/playlist";
import { intersectionBy } from "lodash";
import { useVideoCollection } from "./useVideoCollection";

export const usePlaylistCollection = () => {
  const { data, isLoading } = useVideoCollection();
  const videos = usePlaylistStore(store => store.videos).map(v => ({ id: v }));

  if (!data || isLoading) return [];

  return intersectionBy(data, videos, 'id');
}