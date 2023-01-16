import { useLikesStore } from "@lib/store";
import { intersectionBy } from "lodash";
import { useVideoCollection } from "./useVideoCollection";

export const useLikedCollection = () => {
  const { data, isLoading } = useVideoCollection();
  const likedPlaylist = useLikesStore(store => store.likedIds).map(v => ({ id: v }));

  if (!data || isLoading) return [];

  return intersectionBy(data, likedPlaylist, 'id');
}