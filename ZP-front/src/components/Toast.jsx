import { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`
      fixed top-5 right-5 z-50 px-4 py-2 rounded-lg shadow-lg
      text-white text-sm transition-all duration-300 ease-in-out
      ${type === "success" ? "bg-green-500" : "bg-red-500"}
    `}
    >
      {message}
    </div>
  );
}
