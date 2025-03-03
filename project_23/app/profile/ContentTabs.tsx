"use client";

import React, { useState } from "react";

export default function ContentTabs() {
  enum activeTypes {
    Photos = "photos",
    Likes = "likes",
  }

  const photosList = <div>Photos Content</div>;
  const likesList = <div>Likes Content</div>;

  const activeContent = {
    photos: photosList,
    likes: likesList,
  };

  const [active, setActive] = useState(activeTypes.Photos);

  const activeClass =
    "text-blue-700 border-b-2 grow border-blue-700 mt-2 px-8 transition-all duration-500";
  const nonActiveClass =
    "text-gray-500 border-b-2 border-gray-500 mt-2 px-8 transition-all duration-500";

  const tabsActiveButtonClasses = {
    photos: "photos" === active ? activeClass : nonActiveClass,
    likes: "likes" === active ? activeClass : nonActiveClass,
  };

  const handleClick = (tabName: activeTypes) => () => {
    setActive(tabName);
  };

  function getContent<T, K extends keyof T>(obj: T, prop: K): T[K] {
    return obj[prop];
  }

  return (
    <>
      <div className="flex w-full justify-between">
        <button
          onClick={handleClick(activeTypes.Photos)}
          className={tabsActiveButtonClasses.photos}
        >
          Photos
        </button>
        <button
          onClick={handleClick(activeTypes.Likes)}
          className={tabsActiveButtonClasses.likes}
        >
          Likes
        </button>
      </div>
      <div className="flex grow">{getContent(activeContent, active)}</div>
    </>
  );
}
