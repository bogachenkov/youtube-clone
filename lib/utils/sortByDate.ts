import { IComment, ICommentThread } from "@ts-types/Comment";
import dayjs from "dayjs";

type CommentOrThread = IComment | ICommentThread;

function objectIsThread(obj: CommentOrThread): obj is ICommentThread {
  if (obj.kind === 'youtube#commentThread') return true;
  return false
}

export const sortByDate = <T extends CommentOrThread>(arr: T[]):T[] => {
  return arr.sort((a, b) => {
    const aDate = objectIsThread(a) ? a.snippet.topLevelComment.snippet.publishedAt : a.snippet.publishedAt;
    const bDate = objectIsThread(b) ? b.snippet.topLevelComment.snippet.publishedAt : b.snippet.publishedAt;

    if (dayjs(aDate).isAfter(bDate)) return 1;
    if (dayjs(aDate).isSame(bDate)) return 0;
    return -1;
  })
}