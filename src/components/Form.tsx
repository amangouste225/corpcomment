import { TbTriangleFilled } from "react-icons/tb";

export default function Form() {
  return (
    <div className="rounded-3xl relative w-full overflow-hidden bg-black flex flex-col items-center gap-5 justify-center">
      <div className="flex flex-col  justify-center items-center bg-hero-pattern w-full py-6">
        <h3 className="font-bold">
          <div className="flex relative">
            <TbTriangleFilled
              size={30}
              className="rotate-45 -left-10 -top-2 absolute"
            />
            <TbTriangleFilled
              size={20}
              className="rotate-90 -left-6 absolute -top-0"
            />
          </div>
          Corp <span className="font-thin">Comment</span>
        </h3>
        <h1 className="text-4xl font-bold">
          Give Feedbacks. <span className="italic">Publicly.</span>
        </h1>
      </div>

      <form className="w-[600px] relative mb-10">
        <textarea
          rows={7}
          className="w-full p-5 rounded-xl border-none outline-none"
          placeholder="please add more drink varieties #starbucks"
        ></textarea>

        <button className="rounded-full  px-8 py-2 text-black font-semibold shadow-xl bg-white uppercase absolute right-5 bottom-10">
          submit
        </button>
        <span className="absolute left-5 bottom-10 text-gray-600 font-bold italic">
          108
        </span>
      </form>
    </div>
  );
}
