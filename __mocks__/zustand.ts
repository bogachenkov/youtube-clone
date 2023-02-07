
import { act } from 'react-dom/test-utils'
import actualCreate, { StateCreator } from "zustand";

const storeResetFns = new Set<() => void>();

export const create =
  () =>
  <S,>(createState: StateCreator<S>) => {
    const store = actualCreate<S>(createState)
    const initialState = store.getState()
    storeResetFns.add(() => store.setState(initialState, true))
    return store
};

beforeEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()))
})