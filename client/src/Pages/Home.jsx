import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-img.jpg";
import aboutImage from "../assets/images/about.png"; // Import your "About Us" image

import test from "../assets/categoys/7413369.png";
import test1 from "../assets/categoys/7413375.png";
import CategorysCard from "../components/Ui/CategorysCard";
import star from "../assets/icons/star.png";
import Banner from "../assets/images/banner.png";
import HappyFace from "../assets/icons/happy-face.png";

import review from "../assets/Data/Review";
import Star from "../assets/icons/review.png";
import "./test.css";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-100 py-36">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-5">
              Mtm Veterinary Medicines <br />& PetShop
            </h2>
            <p className="text-lg mb-6">The Heaven Of Your Pets</p>
            <button className="bg-primary text-white hover:bg-primary hover:text-white focus:outline-none rounded-md px-4 py-2">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
          <div className="">
            <img className="h-80 rounded-xl" src={heroImage} alt="" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-28">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <img
              className="w-80 rounded-xl shadow-lg"
              src={aboutImage}
              alt="About Us"
            />
          </div>
          <div className="w-1/2">
            <div className="pl-8">
              <h2 className="text-3xl font-bold mb-5">About Us</h2>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vel felis a nunc rutrum dignissim. Vivamus eu arcu nec libero
                sagittis volutpat.
              </p>
              <p className="text-lg mb-6">
                Integer vehicula eu nisi vel convallis. Sed euismod lorem a
                tortor varius, vel aliquam augue malesuada.
              </p>
              <button className="bg-primary text-white hover:bg-primary hover:text-white focus:outline-none rounded-md px-4 py-2">
                <Link to="/about">Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* categorys */}
      <section>
        <div className="container mb-8">
          <div className="flex gap-4 items-center justify-center">
            <img className="w-11" src={star} alt="" />
            <span className="text-3xl font-bold">Shop by Categories</span>
            <img className="w-11" src={star} alt="" />
          </div>
          <br />
          <br />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 ">
            <CategorysCard />
          </div>
        </div>
      </section>

      {/* banner */}

      <section>
        <div className="container mb-8">
          <div>
            <img className="w-full rounded-xl h-60" src={Banner} alt="" />
          </div>
        </div>
      </section>

      {/* shop by pet */}
      <section>
        <div className="container mb-8">
          <div className="flex gap-4 items-center justify-center">
            <img className="w-11" src={star} alt="" />
            <span className="text-3xl font-bold">Shop by Brand</span>
            <img className="w-11" src={star} alt="" />
          </div>
          <br />
          <br />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 ">
            <CategorysCard />
          </div>
        </div>
      </section>

      {/* shop by treats */}
      <section>
        <div className="container mb-8">
          <div className="flex gap-4 items-center justify-center">
            <img className="w-11" src={star} alt="" />
            <span className="text-3xl font-bold">Shop by Treats</span>
            <img className="w-11" src={star} alt="" />
          </div>
          <br />
          <br />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 ">
            <CategorysCard />
          </div>
        </div>
      </section>

      {/* shop by poultry */}

      <section>
        <div className="container mb-8">
          <div className="flex gap-4 items-center justify-center">
            <img className="w-11" src={star} alt="" />
            <span className="text-3xl font-bold">Shop by Poultry</span>
            <img className="w-11" src={star} alt="" />
          </div>
          <br />
          <br />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 ">
            <CategorysCard />
          </div>
        </div>
      </section>

      {/* review */}
      <section className="bg-green-200">
        <div className="container mb-8 grid">
          <div className="flex gap-4 items-center justify-center">
            <img className="w-11" src={HappyFace} alt="" />
            <span className="text-3xl font-bold">Happy Customers</span>
            <img className="w-11" src={HappyFace} alt="" />
          </div>
          <br />
          <br />
          {/* 
          <div className="flex">
            {review.map((item, index) => (
              <div
                key={item.id}
                class="relative  max-w-xs flex-col
       overflow-hidden rounded-lg 
      border border-gray-100 bg-white shadow-md w-56 m-2 "
              >
                <div className="p-2">
                  <img
                    class="object-cover"
                    src={item.img}
                    alt="product image"
                  />
                </div>

                <div class="mt-4 px-5 pb-5">
                  <div class="mb-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      Qrum nulla laboriosam dolores.
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <img className="w-4" src={Star} alt="" />
                      <img className="w-4" src={Star} alt="" />
                      <img className="w-4" src={Star} alt="" />
                      <img className="w-4" src={Star} alt="" />
                      <img className="w-4" src={Star} alt="" />
                    </div>

                    <div>
                      <p>"Sreya"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>

              <div className="slide">
                <img src={test} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
