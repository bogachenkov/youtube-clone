import YoutubeAPI from "@lib/api/youtube";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const api = new YoutubeAPI();

export const useVideoData = () => {
  const { query } = useRouter();
  const id = query.video_id as string;
  const { data } = useQuery({ 
    queryKey: ['watch', id], 
    queryFn: () => api.videoById({
      part: ['snippet', 'contentDetails', 'statistics'],
      id: [id]
    })
  });

  return data;
}