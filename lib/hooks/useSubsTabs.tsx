import { IVideoPreview } from "@ts-types/Video";
import VideoCard from "@modules/shared/VideoCard";
import { useTabs } from "./useTabs";
import { useSubsCollection } from "./useSubsCollection";
import { createTabsByDate } from "@lib/utils/createTabsByDate";

const renderVideoCard = (v: IVideoPreview) => (
  <VideoCard key={v.id} video={v} />
);

export const useSubsTabs = () => {
  const videos = useSubsCollection();

  const tabs = createTabsByDate(videos, 'snippet.publishedAt', renderVideoCard);

  return useTabs({ tabs, initialTabId: "Today" });
}