import { IVideoPreview } from "@ts-types/Video";
import VideoCard from "@modules/Video/VideoCard";
import { useTabs } from "./useTabs";
import { createTabsByDate } from "@lib/utils/createTabsByDate";

const renderVideoCard = (v: IVideoPreview) => (
  <VideoCard key={v.id} video={v} />
);

export const useHistoryTabs = (collection: IVideoPreview[]) => {
  const tabs = createTabsByDate(collection, 'date', renderVideoCard);

  return useTabs({ tabs, initialTabId: "Today" });
}