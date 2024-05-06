type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="cursor-pointer rounded-full px-6 py-2  text-white shadow-black/10 hover:shadow-black/40 hover:outline hover:outline-1 shadow-xl bg-opacity-25 bg-white">
      {children}
    </button>
  );
}
