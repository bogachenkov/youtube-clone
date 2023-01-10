import { IVideo } from "./Video";

export interface IPlaylist {
  id: string;
  name: string;
  videos: IVideo[];
}