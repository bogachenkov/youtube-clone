import { IComment } from "@ts-types/Comment";
import { v4 } from "uuid";

class Comment implements IComment {
  id: string;
  snippet = {
    videoId: '',
    textDisplay: '',
    textOriginal: '',
    parentId: '',
    authorDisplayName: 'John Doe',
    authorProfileImageUrl: 'johndoeavatar',
    authorChannelUrl: 'johndoeunofficial',
    authorChannelId: {
      value: 'johndoeunofficial',
    },
    canRate: true,
    likeCount: 0,
    publishedAt: (new Date()).toISOString(),
    updatedAt: (new Date()).toISOString(),
  };

  constructor(commentText: string, videoId: string, parentId: string) {
    this.id = v4();
    this.snippet.videoId = videoId;
    this.snippet.parentId = parentId;
    this.snippet.textDisplay = commentText;
    this.snippet.textOriginal = commentText;
  }
}

export default Comment;