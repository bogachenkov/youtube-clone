import axios from "axios"
import { IVideo } from "../../types/Video";
import { getServerUrl } from "../utils/getServerUrl";

interface IVideoResponse {
  videos: IVideo[];
}

export const getVideos = async () => {
  const serverUrl = getServerUrl();
  const response = await axios.get<IVideoResponse>(`${serverUrl}/api/videos`);
  return response.data.videos;
}