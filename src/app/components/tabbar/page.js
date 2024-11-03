import Link from 'next/link';
import { FaThLarge } from 'react-icons/fa';
import { GrUserWorker } from "react-icons/gr";
import { FaTaxi, FaInbox } from "react-icons/fa";

const TabBar = () => {
  return (
    <div className="w-full flex justify-around items-center bg-white p-2 sm:p-4 shadow-lg">
      <Link href="/pages/subCategory/attendate" className="flex items-center space-x-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 border border-gray-300">
        <GrUserWorker className="h-5 w-5 text-black" />
        <span className="text-xs sm:text-sm font-medium">Attendant</span>
      </Link>
      <Link href="/pages/UserDashboard" className="flex items-center space-x-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 border border-gray-300">
        <FaTaxi className="h-5 w-5 text-black" />
        <span className="text-xs sm:text-sm font-medium">Cab</span>
      </Link>
      <Link href="/pages/subCategory/schoolLunch" className="flex items-center space-x-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 border border-gray-300">
        <FaInbox className="h-5 w-5 text-black" />
        <span className="text-xs sm:text-sm font-medium">Lunch</span>
      </Link>
      <Link href="/pages/category" className="flex items-center space-x-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 border border-gray-300">
        <FaThLarge className="h-5 w-5 text-black" />
      </Link>
    </div>
  );
};

export default TabBar;
