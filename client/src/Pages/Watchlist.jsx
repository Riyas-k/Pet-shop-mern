import React from "react";
import Likecard from "../components/Ui/Likecard";
import { BsSearch } from "react-icons/bs";
const Watchlist = () => {
  return (
    <section className="">
      <div
        className="px-[30px] py-6 max-w-[1170px] 
    mx-auto flex flex-col lg:flex-row 
    gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-xl bg-white 
    lg:bg-transparent lg:backdrop-blur rounded-lg"
      >
        <div>
          <input
            type="text"
            placeholder="Search Foods"
            className="p-2.5 w-full text-gray-500
        bg-white border
        rounded-md shadow-sm outline-none appearance-none
        focus:border-orange-500
        font-bold"
          />
        </div>
      </div>

      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <Likecard />
          <Likecard />
          <Likecard />
          <Likecard />
          <Likecard />
          <Likecard />
          <Likecard />
          <Likecard />
          <Likecard />
          <Likecard />
        </div>
      </div>
    </section>
  );
};

export default Watchlist;
