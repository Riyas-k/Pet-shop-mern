import React from "react";
import {
  BsListUl,
  BsPersonBoundingBox,
  BsPersonFillAdd,
  BsFillCartCheckFill,
} from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import {AiOutlineMenu} from "react-icons/ai"
import logo from "../../assets/icons/pet-shop.png";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <header>
      <nav class="bg-white px-4 lg:px-6 py-3.5 ">
        <div class="flex flex-wrap  mx-auto max-w-screen-xl justify-between items-center">
          <Link to="home" className="flex">
            <img src={logo} class="mr-4 h-4 sm:h-7" alt="Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-black">
              Mtm <span className="text-orange-400">Petshop</span>
            </span>
          </Link>

          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto "
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="#" class="text-gray-70 hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="shop" class="text-gray-70 hover:text-orange-400">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#" class="text-gray-70 hover:text-orange-400">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-3 items-center">

            <Link  to="watchList" >
            <span  className="cursor-pointer">
              <FiHeart  size={22} />
            </span>
            </Link>

            <div className="bg-orange-300 w-32 rounded-xl  ">
              <div className="justify-center items-center text-black gap-3 flex">
                <div>
                  <BsFillCartCheckFill size={22} />
                </div>

                <span className="block">
                  <hr />
                </span>

                <div>
                  <p>2 items</p>
                  Rs 96
                </div>
              </div>
            </div>

            <div className="w-16 h-10 border border-gray-600 rounded-xl cursor-pointer">
                <div className="flex justify-between m-2">
                    <span>
                      <BsPersonFillAdd size={20}/>
                    </span>

                    <span>
                      <AiOutlineMenu size={20}/>
                    </span>
                    
                </div>
            </div>

          </div>


          
        </div>
      </nav>
    </header>
  );
};

export default Header;
