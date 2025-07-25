import { useState, useEffect } from "react";

const Searchinput = ({ onSearchFunc }) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 300);
    return () => clearTimeout(handler);
  }, [inputValue]);

  useEffect(() => {
    if (onSearchFunc) {
      onSearchFunc(debouncedValue.trim().toLowerCase());
    }
  }, [debouncedValue, onSearchFunc]);

  return (
    <div className="w-100 max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by character names"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full pr-10 pl-4 py-2 border rounded-3xl 
           border-gray-300 dark:border-white 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
           bg-white text-black placeholder-gray-600 
           dark:bg-gray-800 dark:text-white dark:placeholder-white"
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 dark:text-gray-300">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Searchinput;
