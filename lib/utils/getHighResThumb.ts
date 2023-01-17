import { IVideoPreview } from "@ts-types/Video";

export const getHighResThumb = (thumbs: IVideoPreview['snippet']['thumbnails']) => {
  return thumbs.maxres ?? thumbs.high ?? thumbs.medium ?? thumbs.standart ?? thumbs.default;
}