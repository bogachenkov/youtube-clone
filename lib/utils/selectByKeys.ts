import _ from "lodash"

export const selectByKeys = <T>(...keys: (keyof T)[]) => (store: T) => {
  return _.pick(store, keys);
}