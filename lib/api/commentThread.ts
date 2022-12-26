import { ICommentThread } from "@ts-types/Comment";
import { v4 } from "uuid";
import Comment from "./comment";

class CommentThread implements ICommentThread {
  id: string;
  snippet: ICommentThread['snippet'];
  replies = {
    comments: []
  };

  constructor(commentText: string, videoId: string) {
    const id = v4();
    this.id = id;
    this.snippet = {
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
      topLevelComment: new Comment(commentText, videoId, id)
    }
  }
}
export default CommentThread;