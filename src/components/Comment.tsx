import { useState } from "react";

type User = {
  name: string;
  age: number;
};

export default function Comment() {
  const [state, setState] = useState<User | null>(null);

  return (
    <>
      <div>{state?.name}</div>
      <button onClick={() => setState(state?.age + 1)}></button>
    </>
  );
}
