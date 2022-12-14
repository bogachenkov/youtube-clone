import axios from "axios"
import { IVideo } from "../../types/Video";

interface IVideoResponse {
  videos: IVideo[];
}

export const getVideos = async () => {
  const response = await axios.get<IVideoResponse>('http://localhost:3000/api/videos');
  return response.data.videos;
}