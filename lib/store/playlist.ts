import { noop } from 'lodash';
import { createHydratedStore, createPersistedStore } from './utils';

interface IPlaylistState {
  name: string;
  videos: string[];
  lastUpdate: string;
  addVideoToPL: (videoId: string) => void;
  removeVideoFromPL: (videoId: string) => void;
  clearPlaylist: VoidFunction;
}

const defaultPLState:IPlaylistState = {
  name: 'Demo Playlist',
  videos: [],
  lastUpdate: new Date().toISOString(),
  addVideoToPL: noop,
  removeVideoFromPL: noop,
  clearPlaylist: noop
}

const defaultPLStore = createPersistedStore<IPlaylistState>(
  (set, get) => ({
    name: defaultPLState.name,
    videos: defaultPLState.videos,
    lastUpdate: defaultPLState.lastUpdate,

    addVideoToPL: (videoId: string) => {
      set({
        videos: Array.from(new Set([...get().videos, videoId])),
        lastUpdate: new Date().toISOString()
      })
    },

    removeVideoFromPL: (videoId: string) => {
      set({
        videos: get().videos.filter(v => v !== videoId),
        lastUpdate: new Date().toISOString()
      })
    },

    clearPlaylist: () => set({
      videos: defaultPLState.videos
    })
  }),
  'playlist-store'
)

export const usePlaylistStore = createHydratedStore(
  defaultPLState,
  defaultPLStore
) as typeof defaultPLStore;