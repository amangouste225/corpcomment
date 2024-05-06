import CommentItems from "./CommentItems";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { FeedBack } from "../../lib/types";
type CommentProps = {
  commentList: FeedBack[];
  loading: boolean;
  errorMessage: string;
};

export default function Comment({
  commentList,
  loading,
  errorMessage,
}: CommentProps) {
  return (
    <ol className="text-black relative">
      {loading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {commentList.map((commentItem) => (
        <CommentItems key={commentItem.id} commentItem={commentItem} />
      ))}
    </ol>
  );
}
