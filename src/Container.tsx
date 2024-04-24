import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

export default function Container() {
  return (
    <section className="mx-auto rounded-xl py-10 flex justify-center gap-10">
      <Form />
      <Sidebar />
    </section>
  );
}
