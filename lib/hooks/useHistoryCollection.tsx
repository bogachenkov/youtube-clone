import { useHistoryStore } from "@lib/store";
import { useVideoCollection } from "./useVideoCollection";

import { IVideoPreview } from "@ts-types/Video";

export interface IHistoryVideo extends IVideoPreview {
  date: string;
}

export const useHistoryCollection = (searchLine?: string):IHistoryVideo[] => {
  const { data, isLoading } = useVideoCollection();
  const history = useHistoryStore(store => store.history);

  if (!data || isLoading) return [];

  const videos = history.reduce<IHistoryVideo[]>((result, { id, date }) => {
    const video = data.find(v => {
      return (v.id === id) && (
        searchLine ?
        (
          v.snippet.title.toLowerCase().includes(searchLine.toLowerCase())
          ||
          v.snippet.channelTitle.toLowerCase().includes(searchLine.toLowerCase())
        )
        :
        true
      )
    });

    if (video) {
      result.push({
        ...video,
        date
      });
    }

    return result;
  }, []);

  return videos;
}