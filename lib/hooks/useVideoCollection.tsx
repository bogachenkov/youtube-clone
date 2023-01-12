import VideosAPI from "@lib/api/videos";
import { useQuery } from "@tanstack/react-query";

export const useVideoCollection = () => {
  const { data } = useQuery({ 
    queryKey: ['videos'], 
    queryFn: VideosAPI.fetchDefaultVideos 
  });

  return data;
}