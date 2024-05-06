import CommentList from "./components/CommentList";
import Form from "./components/Form";
import { FeedBack } from "./lib/types";

type ContainerProps = {
  commentList: FeedBack[];
  loading: boolean;
  errorMessage: string;
  handleAddToList: (text: string) => void;
};

export default function Container({
  commentList,
  loading,
  errorMessage,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className="relative mx-auto rounded-xl flex flex-col justify-start ml-20">
      <Form handleAddToList={handleAddToList} />
      <CommentList
        commentList={commentList}
        loading={loading}
        errorMessage={errorMessage}
      />
    </main>
  );
}
