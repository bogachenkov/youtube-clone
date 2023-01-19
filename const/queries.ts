import VideosAPI from "@lib/api/videos";
import YoutubeAPI from "@lib/api/youtube";
import { FetchQueryOptions } from "@tanstack/react-query";
import { IChannel } from "@ts-types/Channel";
import { ICommentThread } from "@ts-types/Comment";
import { IVideo, IVideoPreview } from "@ts-types/Video";
import { REVALIDATE_TIME } from ".";

const youtubeApi = new YoutubeAPI();

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
  staleTime: REVALIDATE_TIME,
  cacheTime: REVALIDATE_TIME
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
  staleTime: REVALIDATE_TIME,
  cacheTime: REVALIDATE_TIME
}


export const watchQuery:(id: string) => FetchQueryOptions<{
  video: IVideo;
  comments: ICommentThread[];
  channel: IChannel | null;
} | null> = (id: string) => ({
  queryKey: ['watch', id],
  queryFn: () => youtubeApi.videoById({
    part: ['snippet', 'contentDetails', 'statistics'],
    id: [id]
  }),
  staleTime: REVALIDATE_TIME,
  cacheTime: REVALIDATE_TIME
})
