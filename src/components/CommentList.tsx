import { FeedBack } from "../lib/types";
import Comment from "./Comment";

type CommentListProps = {
  commentList: FeedBack[];
  loading: boolean;
  errorMessage: string;
};

export default function CommentList({
  commentList,
  loading,
  errorMessage,
}: CommentListProps) {
  return (
    <div className="max-w-[750px] w-full overflow-y-scroll overflow-x-hidden h-[400px] bg-white">
      <Comment
        commentList={commentList}
        loading={loading}
        errorMessage={errorMessage}
      />
    </div>
  );
}
