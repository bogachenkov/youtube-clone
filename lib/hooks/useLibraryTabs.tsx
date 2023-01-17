import { IVideoPreview } from "@ts-types/Video";
import VideoCard from "@modules/shared/VideoCard";
import { Tab, useTabs } from "./useTabs";
import { useSubsCollection } from "./useSubsCollection";
import { createTabsByDate } from "@lib/utils/createTabsByDate";
import { useHistoryCollection } from "./useHistoryCollection";
import { usePlaylistCollection } from "./usePlaylistCollection";
import { useLikedCollection } from "./useLikedCollection";
import Title from "@modules/shared/Title";
import Spacer from "@modules/shared/Spacer";

const renderVideoCard = (v: IVideoPreview) => (
  <VideoCard key={v.id} video={v} />
);

export const useLibraryTabs = () => {
  const videos = useSubsCollection();

  const historyCollection = useHistoryCollection();
  const playlistCollection = usePlaylistCollection();
  const likedCollection = useLikedCollection();

  const tabs:Tab[] = [
    {
      id: 'history',
      label: 'History',
      children: historyCollection.map(renderVideoCard)
    },
    {
      id: 'playlists',
      label: 'Playlists',
      children: playlistCollection.map(renderVideoCard)
    },
    {
      id: 'liked',
      label: 'Liked Videos',
      children: likedCollection.map(renderVideoCard)
    },
  ]


  return useTabs({ tabs, initialTabId: "history" });
}