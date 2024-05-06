type Message = {
  message: string;
};

export default function ErrorMessage({ message }: Message) {
  return <div>{message}</div>;
}
