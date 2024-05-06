import SyncLoader from "react-spinners/ClipLoader";

export default function Spinner() {
  return (
    <div className="absolute -translate-x-1/2 translate-y-1/2 left-1/2 top-1/2">
      <SyncLoader color="#000" size={100} />
    </div>
  );
}
