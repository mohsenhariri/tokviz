import React from "react";

const Home = () => {
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
            
            <pre className="bg-gray-100 mt-4 p-2 sm:p-3 lg:p-4 rounded-md text-xs sm:text-sm whitespace-pre-wrap">
           
           {/* Input text should be here */}

            </pre>
            <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 transition-colors text-white px-3 py-2 rounded-md text-xs sm:text-sm lg:text-base">
                Clear
              </button>
              <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition-colors text-white px-3 py-2 rounded-md text-xs sm:text-sm lg:text-base">
                Show example
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
