import { IVideoPreview } from "@ts-types/Video";
import { MockedVideoCollection } from "./apiResponses";

const vids = MockedVideoCollection.result;

export const MockedSubsCollection:IVideoPreview[] = vids.slice(2, 5);