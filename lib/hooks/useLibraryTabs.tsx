import { IVideoPreview } from "@ts-types/Video";
import VideoCard from "@modules/shared/VideoCard";
import { Tab, useTabs } from "./useTabs";
import { useHistoryCollection } from "./useHistoryCollection";
import { usePlaylistCollection } from "./usePlaylistCollection";
import { useLikedCollection } from "./useLikedCollection";
import Playlist from "@modules/Playlist";
import { useLikesStore } from "@lib/store";
import { usePlaylistStore } from "@lib/store/playlist";
import GridContainer from "@modules/shared/GridContainer";

const renderVideoCard = (v: IVideoPreview) => (
  <VideoCard key={v.id} video={v} />
);

export const useLibraryTabs = () => {
  const historyCollection = useHistoryCollection();

  const playlistCollection = usePlaylistCollection();
  const lastPlaylistUpdate = usePlaylistStore(store => store.lastUpdate);

  const likedCollection = useLikedCollection();
  const lastLikedUpdate = useLikesStore(store => store.lastUpdate);

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
          lastUpdate={lastPlaylistUpdate}
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
          lastUpdate={lastLikedUpdate}
        />
      )
    },
  ]


  return useTabs({ tabs, initialTabId: "history" });
}