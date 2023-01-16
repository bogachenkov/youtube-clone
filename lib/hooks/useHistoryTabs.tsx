import { IVideoPreview } from "@ts-types/Video";
import VideoCard from "@modules/shared/VideoCard";
import { useTabs } from "./useTabs";
import { useHistoryCollection } from "./useHistoryCollection";
import { createTabsByDate } from "@lib/utils/createTabsByDate";

const renderVideoCard = (v: IVideoPreview) => (
  <VideoCard key={v.id} video={v} />
);

export const useHistoryTabs = (searchLine?: string) => {
  const videos = useHistoryCollection(searchLine);

  const tabs = createTabsByDate(videos, 'date', renderVideoCard);

  return useTabs({ tabs, initialTabId: "Today" });
}