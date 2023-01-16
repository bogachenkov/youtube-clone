import { noop } from 'lodash';
import { createHydratedStore, createPersistedStore } from './utils';

interface ISubscriptionsState {
  subscriptions: string[];
  toggleSubscription: (id: string) => void;
}

const defaultSubscriptionsState:ISubscriptionsState = {
  subscriptions: [],
  toggleSubscription: noop
}

const toggleSubscription = (ids: ISubscriptionsState['subscriptions'], id: string) => {
  return ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
}

export const defaultSubscriptionsStore = createPersistedStore<ISubscriptionsState>(
  (set, get) => ({
    subscriptions: [],
    toggleSubscription: (id) => set({
      subscriptions: toggleSubscription(get().subscriptions, id)
    })
  }),
  'subscriptions-store'
);

export const useSubscriptionsStore = createHydratedStore(
  defaultSubscriptionsState,
  defaultSubscriptionsStore
) as typeof defaultSubscriptionsStore;