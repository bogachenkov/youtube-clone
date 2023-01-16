import VideosAPI from "@lib/api/videos";
import { IVideoPreview } from "@ts-types/Video";

export type Query = {
  queryKey: string[];
  queryFn: () => Promise<IVideoPreview[]>;
}

export const homeQuery:Query = {
  queryKey: ['home'],
  queryFn: () => {
    console.log('QUERIENG');
    return VideosAPI.fetch({
      cacheConfig: {
        name: 'homepage_cache'
      },
      query: 'ambience',
      maxResults: 48
    })
  },
}

export const exploreQuery:Query = {
  queryKey: ['explore'],
  queryFn: () => {
    console.log('QUERIENG');
    return VideosAPI.fetch({
      cacheConfig: {
        name: 'explore_cache'
      },
      query: 'ambience',
      maxResults: 12
    })
  }
}