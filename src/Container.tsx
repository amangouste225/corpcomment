import CommentList from "./components/CommentList";
import Form from "./components/Form";

export default function Container() {
  return (
    <main className="relative mx-auto rounded-xl flex flex-col justify-start ml-20">
      <Form />
      <CommentList />
    </main>
  );
}
