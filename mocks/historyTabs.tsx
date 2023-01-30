import { Tab } from "@lib/hooks/useTabs"
import VideoCard from "@modules/Video/VideoCard";
import { MockedVideoCollection } from "./apiResponses";

const vids = MockedVideoCollection.result;

export const MockedHistoryTabs:Tab[] = [
  {
    id: 'Today',
    label: 'Today',
    // @ts-ignore
    children: <VideoCard key={vids[0].id} video={vids[0]} />
  },
  {
    id: 'Yesterday',
    label: 'Yesterday',
    // @ts-ignore
    children: <VideoCard key={vids[1].id} video={vids[1]} />
  },
  {
    id: 'Last Friday',
    label: 'Last Friday',
    // @ts-ignore
    children: <VideoCard key={vids[2].id} video={vids[2]} />
  },
]