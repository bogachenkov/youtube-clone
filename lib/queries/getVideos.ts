import axios from "axios"
import { YoutubeApiResponse } from "../api/videos";
import { getServerUrl } from "../utils/getServerUrl";

export const getVideos = async () => {
  const serverUrl = getServerUrl();
  const response = await axios.get<YoutubeApiResponse>(`${serverUrl}/api/videos`);
  return response.data.items;
}