import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedBack } from "../../lib/types";

type FeedbackCommentItem = {
  commentItem: FeedBack;
};

export default function CommentItems({ commentItem }: FeedbackCommentItem) {
  return (
    <li className="group">
      <button className="flex w-full comment group-hover:translate-x-1 duration-300 py-5 px-5 justify-between items-center gap-5 border-gray-300 border-b-2 bg-slate-100 hover:bg-slate-200">
        <span className="flex flex-col items-center">
          <TriangleUpIcon fontSize={50} />
          <span>{commentItem.upvoteCount}</span>
        </span>
        <div className="flex justify-center items-center">
          <p className="text-3xl text-white bg-blue-900 font-semibold py-2 px-5 rounded-lg">
            {commentItem.badgeLetter}
          </p>
        </div>

        <div className="text-left flex-1">
          <p className="uppercase text-gray-400 font-semibold">
            {commentItem.company}
          </p>
          <p>{commentItem.text}</p>
        </div>

        <p className="text-md">
          {commentItem.daysAgo === 0 ? "NEW" : `${commentItem.daysAgo}d`}
        </p>
      </button>
    </li>
  );
}
