import VideosAPI from "@lib/api/videos";
import { FetchQueryOptions } from "@tanstack/react-query";
import { IVideoPreview } from "@ts-types/Video";
import { REVALIDATE_TIME } from ".";

export const homeQuery:FetchQueryOptions<IVideoPreview[]> = {
  queryKey: ['home'],
  queryFn: () => {
    return VideosAPI.fetch({
      cacheConfig: {
        name: 'homepage_cache'
      },
      query: 'fantasy forest ambience',
      maxResults: 24
    })
  },
  staleTime: REVALIDATE_TIME
}

export const exploreQuery:FetchQueryOptions<IVideoPreview[]> = {
  queryKey: ['explore'],
  queryFn: () => {
    return VideosAPI.fetch({
      cacheConfig: {
        name: 'explore_cache'
      },
      query: 'fantasy forest ambience',
      maxResults: 12
    })
  },
  staleTime: REVALIDATE_TIME
}