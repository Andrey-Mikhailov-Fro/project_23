import React from "react";
import HomeIcon from "./icons/HomeIcon";
import MessagesIcon from "./icons/MessagesIcon";
import OptionsIcon from "./icons/OptionsIcon";
import ProfileIcon from "./icons/ProfileIcon";

export default function NavBar() {
  return (
    <nav className="absolute flex justify-between max-sm:w-full bottom-0 left-0 md:h-2/3">
      <div
        className="flex relative w-full flex-row md:flex-col md:flex-nowrap justify-around max-sm:mt-5 border-t-2 border-gray-200
                            max-sm:before:absolute max-sm:before:left-1/2 max-sm:before:-translate-x-1/2 max-sm:before:-top-4 max-sm:before:w-1/6 max-sm:before:aspect-square max-sm:before:shadow-md max-sm:before:shadow-gray-500 max-sm:before:bg-white max-sm:before:rounded-full"
      >
        <div className="flex grow max-sm:mr-10 md:flex-col">
          <button className="flex grow justify-center items-center rounded-md transition-colors hover:bg-gray-600 duration-300">
            <HomeIcon />
          </button>
          <button className="flex grow justify-center items-center rounded-md transition-colors hover:bg-gray-600 duration-300">
            <MessagesIcon />
          </button>
        </div>
        <div className="flex absolute items-center justify-center -bottom-3 left-1/2 -translate-x-1/2  w-1/6 md:relative md:grow">
          <button className="flex w-full justify-center items-center transition-all hover:-translate-y-4 rounded-full aspect-square bg-blue-700 text-lg text-white">
            +
          </button>
        </div>
        <div className="flex grow max-sm:ml-10 md:flex-col">
          <button className="flex grow justify-center items-center rounded-md transition-colors hover:bg-gray-600 duration-300">
            <OptionsIcon />
          </button>
          <button className="flex grow justify-center items-center rounded-md transition-colors hover:bg-gray-600 duration-300">
            <ProfileIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}
