import { IVideoPreview } from "@ts-types/Video";
import VideoCard from "@modules/Video/VideoCard";
import { Tab, useTabs } from "./useTabs";
import { useHistoryCollection } from "./useHistoryCollection";
import { usePlaylistCollection } from "./usePlaylistCollection";
import { useLikedCollection } from "./useLikedCollection";
import Playlist from "@modules/Playlist";
import GridContainer from "@ui/GridContainer";
import { useStore } from "@lib/providers/GlobalStoreProvider";

const renderVideoCard = (v: IVideoPreview) => (
  <VideoCard key={v.id} video={v} />
);

export const useLibraryTabs = () => {
  const historyCollection = useHistoryCollection();
  const playlistCollection = usePlaylistCollection();

  const likedCollection = useLikedCollection();
  const { likesStore, playlistStore } = useStore();

  const tabs:Tab[] = [
    {
      id: 'history',
      label: 'History',
      children: (
        <GridContainer>
          {historyCollection.map(renderVideoCard)}
        </GridContainer>
      )
    },
    {
      id: 'playlists',
      label: 'Playlists',
      children: (
        <Playlist
          collection={playlistCollection}
          name="Demo Playlist"
          lastUpdate={playlistStore.lastUpdate}
        />
      )
    },
    {
      id: 'liked',
      label: 'Liked Videos',
      children: (
        <Playlist
          collection={likedCollection}
          name="Liked Videos"
          lastUpdate={likesStore.lastUpdate}
        />
      )
    },
  ]


  return useTabs({ tabs, initialTabId: "history" });
}