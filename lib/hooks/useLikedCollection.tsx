import { useLikesStore } from "@lib/store";
import { intersectionBy } from "lodash";
import { useVideoCollection } from "./useVideoCollection";

export const useLikedCollection = () => {
  const videoCollection = useVideoCollection();
  const likedPlaylist = useLikesStore(store => store.likedIds).map(v => ({ id: v }));

  return intersectionBy(videoCollection, likedPlaylist, 'id');
}