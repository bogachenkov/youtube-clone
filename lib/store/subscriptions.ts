import create from 'zustand';
import { persist } from 'zustand/middleware';

interface ISubscriptionsState {
  subscriptions: string[];
  toggleSubscription: (id: string) => void;
}

const toggleSubscription = (ids: ISubscriptionsState['subscriptions'], id: string) => {
  return ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
}

export const useSubscriptionsStore = create<ISubscriptionsState>()(
  persist(
    (set, get) => ({
      subscriptions: [],
      toggleSubscription: (id) => set({
        subscriptions: toggleSubscription(get().subscriptions, id)
      })
    }),
    {
      name: 'subscriptions-store',
      getStorage: () => sessionStorage,
    }
  )
);