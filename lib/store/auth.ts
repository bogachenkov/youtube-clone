import { DEFAULT_USER_DATA } from '@const/data';
import { User } from '@ts-types/User';
import { noop } from 'lodash';
import { createHydratedStore, createPersistedStore } from './utils';

interface IAuthState {
  user: User | null;
  signIn: VoidFunction;
  signOut: VoidFunction;
}

const defaultAuthState:IAuthState = {
  user: null,
  signIn: noop,
  signOut: noop
}

const defaultAuthStore = createPersistedStore<IAuthState>(
  (set) => ({
    user: defaultAuthState.user,
    signIn: () => {
      set({
        user: DEFAULT_USER_DATA
      });
    },
    signOut: () => {
      set({
        user: defaultAuthState.user
      })
    }
  }),
  'auth-store'
);


export const useAuthStore = createHydratedStore(
  defaultAuthState, 
  defaultAuthStore
) as typeof defaultAuthStore;