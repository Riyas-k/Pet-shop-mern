import React from "react";
import Likecard from "../components/Ui/Likecard";
import { BsSearch } from "react-icons/bs";
const Watchlist = () => {
  return (
    <section className="">


      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-40">
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
