import { IPlaylist } from '@ts-types/Playlist';
import { IVideo } from '@ts-types/Video';
import { noop } from 'lodash';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { createHydratedStore, createPersistedStore } from './utils';

interface IPlaylistState {
  playlists: IPlaylist[];
  createPlayList: (name: string) => void;
  removePlaylist: (id: string) => void;
  addVideoToPL: (playlistId: string, video: IVideo) => void;
  removeVideoFromPL: (playlistId: string, videoId: string) => void;
}

const defaultPLState:IPlaylistState = {
  playlists: [],
  createPlayList: noop,
  removePlaylist: noop,
  addVideoToPL: noop,
  removeVideoFromPL: noop
}

const defaultPLStore = createPersistedStore<IPlaylistState>(
  (set, get) => ({
    playlists: [],
    createPlayList: () => {},
    removePlaylist: (id: string) => {},
    addVideoToPL: () => {},
    removeVideoFromPL: () => {},
  }),
  'playlist-store'
)

export const usePlaylistStore = createHydratedStore(
  defaultPLState,
  defaultPLStore
) as typeof defaultPLStore;