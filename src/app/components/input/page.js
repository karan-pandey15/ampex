// // components/SearchInput.js

// import React from "react";
// import { FaSearch, FaCamera, FaMicrophone } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <div className="flex justify-center items-center mt-5 mb-5">
//       <div className="relative w-full max-w-md">
//         <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search for Vitamin C Face Wash"
//           className="w-full pl-10 pr-10 py-2 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
//         />
//         <FaCamera className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
//         <FaMicrophone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
//       </div>
//     </div>
//   );
// };

// export default SearchInput;


// components/SearchInput.js

import React from "react";
import { FaSearch, FaCamera, FaMicrophone } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="flex justify-center items-center mt-5 mb-5 mx-4">
      <div className="relative w-full max-w-md">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for Vitamin C Face Wash"
          className="w-full pl-10 pr-10 py-2 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <FaCamera className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
        <FaMicrophone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchInput;
