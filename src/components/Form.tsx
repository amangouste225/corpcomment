import { TbTriangleFilled } from "react-icons/tb";
import FeedbackForm from "./FeedbackForm";

export default function Form() {
  return (
    <div className="rounded-t-3xl relative max-w-screen-md w-full overflow-hidden bg-black flex flex-col items-center gap-5 justify-center">
      <div className="flex flex-col  justify-center items-center bg-hero-pattern w-full py-6">
        <a href="/">
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
        </a>
        <h1 className="text-4xl font-bold">
          Give Feedbacks. <span className="italic">Publicly.</span>
        </h1>
      </div>
      <FeedbackForm />
    </div>
  );
}

//  className="w-[600px] relative mb-10
