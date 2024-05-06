import Comment from "./Comment";

export default function CommentList() {
  return (
    <div className="max-w-[750px] w-full overflow-y-scroll overflow-x-hidden h-[400px] bg-white">
      <Comment />
    </div>
  );
}
