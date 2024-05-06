import { useEffect, useState } from "react";
import CommentItems from "./CommentItems";
const url =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

export default function Comment() {
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeedBack = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setCommentList(data.feedbacks);
      } catch (error) {
        console.error("Error");
      }
    };

    fetchFeedBack();
  }, []);
  return (
    <ol className="text-black">
      {commentList.slice(0, 10).map((commentItem) => (
        <CommentItems key={commentItem.id} commentItem={commentItem} />
      ))}
    </ol>
  );
}
