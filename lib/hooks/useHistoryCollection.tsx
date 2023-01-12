import { useHistoryStore } from "@lib/store";
import { useVideoCollection } from "./useVideoCollection";

import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { sortByDate } from "@lib/utils/sortByDate";
import { IVideoPreview } from "@ts-types/Video";
import VideoCard from "@modules/shared/VideoCard";
import { Tab, useTabs } from "./useTabs";
import { getCalendarDate } from "@lib/utils/getCalendarDate";
import { intersectionBy } from "lodash";

dayjs.extend(utc)
dayjs.extend(timezone)

const renderVideoCard = (v: IVideoPreview) => (
  <VideoCard key={v.id} video={v} />
);

export const useHistoryCollection = (searchLine?: string) => {
  const videoCollection = useVideoCollection();
  const history = useHistoryStore(store => store.history);

  const uniqueDates = Array.from(new Set(history.map(h => dayjs(h.date).tz('Europe/Moscow').format('YYYY-MM-DD')))).sort(sortByDate);

  const tabs:Tab[] = uniqueDates.map((date) => {
    const calendarDate:string = getCalendarDate(date);

    const recordsForDate = history.filter(record => {
      return dayjs(record.date).isSame(date, 'day');
    });

    const videosForDate = intersectionBy(videoCollection, recordsForDate, 'id');
    const resultedArray = searchLine ? videosForDate.filter(
      v => v.snippet.title.toLowerCase().includes(searchLine.toLowerCase())
    ) : videosForDate;

    return {
      label: calendarDate,
      id: calendarDate,
      children: resultedArray.map(renderVideoCard)
    }
  }).reverse();

  return useTabs({ tabs, initialTabId: "Today" });
}