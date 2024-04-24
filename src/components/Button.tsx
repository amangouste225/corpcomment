type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full px-6 py-2  text-white shadow-black/10 shadow-xl bg-opacity-25 bg-white">
      {children}
    </button>
  );
}
