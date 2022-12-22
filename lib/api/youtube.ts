import axios from "axios";
import { IVideoPreview, IVideo } from "@ts-types/Video";
import { handleAxiosError } from "@utils/handleAxiosError";
import qs from 'qs';
import _ from "lodash";

const ax = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  paramsSerializer: {
    serialize(params) {
      return qs.stringify(params, { indices: false, arrayFormat: 'repeat' })
    } 
  }
});

ax.interceptors.request.use(config => {
  config.params = {
    part: ['snippet'],
    maxResults: 32,
    key: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
    ...config.params,
  };
  return config;
});


export type YoutubeVideosResponse = {
  items: IVideo[]
}

type YoutubeVideoPart = 'contentDetails' |
                        'fileDetails' |
                        'id' |
                        'liveStreamingDetails' |
                        'localizations' |
                        'player' |
                        'processingDetails' |
                        'recordingDetails' |
                        'snippet' |
                        'statistics' |
                        'status' |
                        'suggestions' |
                        'topicDetails';

type YoutubeChannelPart = 'snippet' | 'id';

interface YoutubeCommonParams {
  location?: string;
  maxResults?: number;
  videoCategoryId?: number;
}

export interface YoutubeSearchParams extends YoutubeCommonParams {
  q: string;
}

export interface YoutubeVideoListParams extends YoutubeCommonParams {
  part: YoutubeVideoPart[];
  id?: string[];
}

export interface YoutubeChannelParams extends YoutubeCommonParams {
  part: YoutubeChannelPart[];
  id: [string];
}

export interface YoutubeVideoParams extends YoutubeCommonParams {
  part: YoutubeVideoPart[];
  id: [string];
}

class YoutubeAPI {
  protected formatYoutubeResponse(items: IVideo[]):IVideoPreview[] {
    return items.map(item => ({
      id: item.id,
      contentDetails: _.pick(item.contentDetails, 'duration'),
      statistics: _.pick(item.statistics, 'viewCount'),
      snippet: _.pick(item.snippet, [
        'categoryId',
        'channelId',
        'channelTitle',
        'liveBroadcastContent',
        'publishedAt',
        'thumbnails',
        'title'
      ]),
    }))
  }

  async search(params?: YoutubeSearchParams) {
    try {
      const response = await ax.get<YoutubeVideosResponse>('/search', {
        params, 
      });
      const id = response.data.items.map((i: any) => i.id.videoId);
      return await this.videoList({
        part: ['snippet', 'statistics', 'contentDetails'],
        id
      });
    } catch (error) {
      handleAxiosError(error);
      return [];
    }
  }

  async videoList(params?: YoutubeVideoListParams) {
    try {
      const { data: { items } } = await ax.get<YoutubeVideosResponse>('/videos', {
        params
      });
      return this.formatYoutubeResponse(items);
    } catch (error) {
      handleAxiosError(error);
      return [];
    }
  }

  async channel(params?: YoutubeChannelParams) {
    try {
      const { data: { items } } = await ax.get<YoutubeVideosResponse>('/channels', {
        params
      });
      return items[0];
    } catch (error) {
      handleAxiosError(error);
      return null;
    }
  }

  async comments(params?: YoutubeChannelParams) {
    try {
      const { data: { items } } = await ax.get<YoutubeVideosResponse>('/commentThreads', {
        params
      });
      return items[0];
    } catch (error) {
      handleAxiosError(error);
      return null;
    }
  }

  async video(params?: YoutubeVideoParams) {
    try {
      const { data: { items } } = await ax.get<YoutubeVideosResponse>('/videos', {
        params
      });
      return items[0];
    } catch (error) {
      handleAxiosError(error);
      return null;
    }
  }
}

export default YoutubeAPI;