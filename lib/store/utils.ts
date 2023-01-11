import { useEffect, useState } from "react";
import create, { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export type IStateCreator<T> = StateCreator<T, [], [], T>;

export const createPersistedStore = <T>(
  stateCreator: IStateCreator<T>,
  key: string
) => create(
  persist<T>(
    stateCreator,
    {
      name: key,
      getStorage: () => sessionStorage,
    }
  )
);

export const createHydratedStore = <T, S extends CallableFunction>(
  defaultState: T,
  persistedStore: S,
) => <U>(
  selector: (s: T) => U, 
  equals?: any
) => {
  const store = persistedStore(selector, equals);

  const [isHydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  return isHydrated ? store : selector(defaultState);
}