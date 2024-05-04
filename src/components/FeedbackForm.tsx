export default function FeedbackForm() {
  return (
    <form className="bg-slate-800 rounded-xl relative w-[450px] h-[200px] mb-10">
      <textarea
        id="feedbacks"
        placeholder="Enter your feedback here, remember to #hashtag the company ✏️"
        spellCheck={false}
        maxLength={150}
        className="bg-transparent p-4 focus:outline-none w-full h-full"
      />

      <div>
        <p className="text-white font-bold italic absolute left-5 bottom-6">
          108
        </p>
        <button className="rounded-full  px-8 py-2 text-black font-semibold shadow-xl bg-white uppercase  absolute right-5 bottom-6">
          submit
        </button>
      </div>
    </form>
  );
}
