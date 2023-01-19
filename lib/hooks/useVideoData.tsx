import { watchQuery } from "@const/queries";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useVideoData = () => {
  const { query } = useRouter();
  const id = query.video_id as string;

  const { data } = useQuery(watchQuery(id));

  return data;
}