import { useEffect, useState } from "react";
import Header from "./components/Hstag";
import Container from "./Container";
// import Footer from "./Footer";
import "./index.css";
import { FeedBack } from "./lib/types";
const url =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";
function App() {
  const [commentList, setCommentList] = useState<FeedBack[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToList = async (text: string) => {
    const companyN = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: FeedBack = {
      text: text,
      upvoteCount: 0,
      company: companyN,
      badgeLetter: companyN.substring(0, 1).toUpperCase(),
      daysAgo: 0,
      id: Date.now(),
    };
    setCommentList((prev) => [...prev, newItem]);

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const fetchFeedBack = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setLoading(false);
        setCommentList(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later !");
        console.error("Error");
      }
      setLoading(false);
    };

    fetchFeedBack();
  }, []);
  return (
    <div className="max-w-screen-lg py-10 mx-auto relative">
      <Header />
      <Container
        commentList={commentList}
        loading={loading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
