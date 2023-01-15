import { homeQuery } from "@const/queries";
import VideosAPI, { FetchVideosArgs } from "@lib/api/videos";
import { useQuery } from "@tanstack/react-query";

export const useVideoCollection = (key: string = homeQuery.key, args: FetchVideosArgs = homeQuery.config) => {
  const { data } = useQuery({ 
    queryKey: [key],
    queryFn: () => VideosAPI.fetch(args)
  });

  return data ?? [];
}