import { IPlaylist } from '@ts-types/Playlist';
import { noop } from 'lodash';
import { createHydratedStore, createPersistedStore } from './utils';

interface IPlaylistState {
  playlist: IPlaylist;
  addVideoToPL: (videoId: string) => void;
  removeVideoFromPL: (videoId: string) => void;
  clearPlaylist: VoidFunction;
}

const defaultPLState:IPlaylistState = {
  playlist: {
    name: 'Demo',
    id: 'demo',
    videos: []
  },
  addVideoToPL: noop,
  removeVideoFromPL: noop,
  clearPlaylist: noop
}

const defaultPLStore = createPersistedStore<IPlaylistState>(
  (set, get) => ({
    playlist: defaultPLState.playlist,
    addVideoToPL: (videoId: string) => {},
    removeVideoFromPL: (videoId: string) => {},
    clearPlaylist: () => set({
      playlist: defaultPLState.playlist
    })
  }),
  'playlist-store'
)

export const usePlaylistStore = createHydratedStore(
  defaultPLState,
  defaultPLStore
) as typeof defaultPLStore;