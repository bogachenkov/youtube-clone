import { watchQuery } from "@const/queries";
import YoutubeAPI from "@lib/api/youtube";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const api = new YoutubeAPI();

export const useVideoData = () => {
  const { query } = useRouter();
  const id = query.video_id as string;

  const { data } = useQuery(watchQuery(id));

  return data;
}