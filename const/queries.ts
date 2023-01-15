import { FetchVideosArgs } from "@lib/api/videos";

export type Query = {
  key: string,
  config: FetchVideosArgs
}

export const homeQuery:Query = {
  key: 'home',
  config: {
    cacheConfig: {
      name: 'homepage_cache'
    },
    query: 'ambience',
    maxResults: 48
  }
}

export const exploreQuery:Query = {
  key: 'explore',
  config: {
    cacheConfig: {
      name: 'explore_cache'
    },
    query: 'ambience',
    maxResults: 12
  }
}