import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constant";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};
export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState<string>("");
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddToList(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 rounded-lg relative max-w-[550px] w-full h-[200px] mb-10 border-[1px] border-slate-600"
    >
      <textarea
        onChange={handleChange}
        id="feedbacks-textarea"
        spellCheck={false}
        placeholder="Enter your feedback here, remember to #hashtag the company ✏️"
        value={text}
        className="bg-transparent p-5 focus:outline-none w-full h-full relative text-white"
      />

      {/* <label
        htmlFor="feedbacks-textarea"
        className="absolute top-5 w-full opacity-45 left-5 max-w-[460px]"
      >
        Enter your feedback here, remember to #hashtag the company ✏️
      </label> */}

      <div>
        <p className="text-white  font-thin italic absolute left-5 bottom-6 opacity-45">
          {charCount}
        </p>
        <button className="rounded-full px-6 py-2 text-black font-semibold shadow-xl bg-white uppercase  absolute right-4 bottom-5">
          submit
        </button>
      </div>
    </form>
  );
}
