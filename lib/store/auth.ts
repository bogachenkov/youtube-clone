import { DEFAULT_USER_DATA } from '@const/data';
import { User } from '@ts-types/User';
import create from 'zustand';

interface IAuthState {
  user: User | null;
  signIn: VoidFunction;
  signOut: VoidFunction;
}

export const useAuthStore = create<IAuthState>(
  (set) => ({
    user: null,
    signIn: () => {
      set({
        user: DEFAULT_USER_DATA
      });
    },
    signOut: () => {
      set({
        user: null
      })
    }
  }),
);