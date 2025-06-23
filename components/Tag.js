// Tag.js
export function Tag({ children }) {
  return (
    <div className="px-2.5 bg-green-600 rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex justify-center items-center">
      <p className="text-white text-sm font-semibold font-['Open_Sans']">
        {children}
      </p>
    </div>
  );
}
