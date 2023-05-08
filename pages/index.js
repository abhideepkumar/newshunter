import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-green-800 text-8xl py-16 font-serif">News Hunter</h1>
      <h2 className="text-green-600 text-2xl font-serif">Access News now</h2>

      {/* Search bar */}
      <div className="px-10 py-20">
        <div>
          <div className="max-w-xl">
            <div className="flex space-x-1 items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg font-semibold">
                Enter any Keyword (Ex: Google)
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="flex rounded-md overflow-hidden w-full">
                <input
                  type="text"
                  className="w-full rounded-md rounded-r-none px-16 bg-teal-100"
                  value={keyword}
                  onChange={handleChange}
                />
                <button
                  className="bg-teal-600  px-6 text-lg font-semibold py-4 rounded-r-md"
                  onClick={() => {
                    router.push(`/news/${keyword}`);
                  }}
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
