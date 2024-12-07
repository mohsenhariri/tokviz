"use client";

import React, { useState, useEffect } from "react";

import { Tokenizer } from "@/lib/tokenizer";

import vocabData from "@/lib/tokenizer.json";

const Home = () => {
  const EXAMPLE_TEXT =
    "Hi there, how are you doing today? I hope you are doing well!";

  const [displayMode, setDisplayMode] = useState<"token" | "id">("token");

  const [userInput, setUserInput] = useState("");
  const [tokenizer, setTokenizer] = useState<Tokenizer | null>(null);
  const [results, setResults] = useState<{
    colorMappedTokens?: [string, number, string][];
  }>({});

  useEffect(() => {
    setTokenizer(new Tokenizer(vocabData));
  }, []);

  const handleTokenize = () => {
    if (!tokenizer || !userInput) return;

    const tokens = tokenizer.tokenize(userInput);
    const ids = tokenizer.tokensToIds(tokens);
    const colorMappedTokens = tokenizer.mapTokensToColors(tokens, ids);
    setResults({ colorMappedTokens });
  };

  const handleClear = () => {
    setUserInput("");
    setResults({});
  };

  const handleShowExample = () => {
    setUserInput(EXAMPLE_TEXT);
    if (tokenizer) {
      const tokens = tokenizer.tokenize(EXAMPLE_TEXT);
      const ids = tokenizer.tokensToIds(tokens);
      const colorMappedTokens = tokenizer.mapTokensToColors(tokens, ids);
      setResults({ colorMappedTokens });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          Tokenizer
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-gray-200 p-4 sm:p-5 lg:p-6 shadow-inner">
          <ul className="space-y-4 flex flex-row lg:flex-col justify-around lg:justify-start overflow-x-auto lg:overflow-visible">
            <li className="text-sm sm:text-md lg:text-lg font-semibold text-gray-700 whitespace-nowrap px-2 lg:px-0">
              GPT-4o & GPT-4o mini
            </li>
            <li className="text-sm sm:text-md lg:text-lg font-semibold text-gray-700 whitespace-nowrap px-2 lg:px-0">
              GPT-3.5 & GPT-4
            </li>
            <li className="text-sm sm:text-md lg:text-lg font-semibold text-gray-700 whitespace-nowrap px-2 lg:px-0">
              GPT-3 (Legacy)
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6">
          <div className="bg-white shadow-lg p-4 sm:p-5 lg:p-6 rounded-md">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base resize-y min-h-[100px]"
              placeholder="Enter text to tokenize..."
            />

            {results.colorMappedTokens && (
              <div className="mt-4 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {results.colorMappedTokens.map(
                    ([token, id, color], index) => (
                      <div
                        key={index}
                        className="px-2 py-1 rounded text-sm transition-all duration-200"
                        style={{
                          backgroundColor: color,
                          color: getBrightness(color) > 128 ? "#000" : "#fff",
                        }}
                      >
                        {displayMode === "token" ? token : id}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={handleTokenize}
                className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 transition-colors text-white px-3 py-2 rounded-md text-xs sm:text-sm lg:text-base"
              >
                Tokenize
              </button>
              <button
                onClick={() =>
                  setDisplayMode((prev) => (prev === "token" ? "id" : "token"))
                }
                className="w-full sm:w-auto bg-gray-500 hover:bg-gray-600 transition-colors text-white px-3 py-2 rounded-md text-xs sm:text-sm lg:text-base"
              >
                {displayMode === "token" ? "Show IDs" : "Show Tokens"}
              </button>
              <button
                onClick={handleClear}
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 transition-colors text-white px-3 py-2 rounded-md text-xs sm:text-sm lg:text-base"
              >
                Clear
              </button>
              <button
                onClick={handleShowExample}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition-colors text-white px-3 py-2 rounded-md text-xs sm:text-sm lg:text-base"
              >
                Show example
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const getBrightness = (color: string): number => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
};

export default Home;
