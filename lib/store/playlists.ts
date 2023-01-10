import { IPlaylist } from '@ts-types/Playlist';
import { IVideo } from '@ts-types/Video';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IPlaylistState {
  playlists: IPlaylist[];
  createPlayList: (name: string) => void;
  removePlaylist: (id: string) => void;
  addVideoToPL: (playlistId: string, video: IVideo) => void;
  removeVideoFromPL: (playlistId: string, videoId: string) => void;
}

export const useLikesStore = create<IPlaylistState>()(
  persist(
    (set, get) => ({
      playlists: [],
      createPlayList: () => {},
      removePlaylist: (id: string) => {},
      addVideoToPL: () => {},
      removeVideoFromPL: () => {},
    }),
    {
      name: 'playlists-storage',
      getStorage: () => sessionStorage,
    }
  )
);