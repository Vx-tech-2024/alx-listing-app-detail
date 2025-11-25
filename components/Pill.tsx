const Pill = ({ label }: { label: string }) => {
  return (
    <button className="px-4 py-2 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300">
      {label}
    </button>
  );
};

export default Pill;
