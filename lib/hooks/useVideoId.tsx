import { useRouter } from "next/router";

export const useVideoId = () => {
  const { query } = useRouter();
  const id = query.video_id as string;
  
  return id;
}