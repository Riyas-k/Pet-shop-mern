import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.jpg";

import Whatsapp from "../../assets/icons/whatsapp.png";
import Facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram (1).png";
import Twitter from "../../assets/icons/twitter.png";
import Telegram from "../../assets/icons/telegram.png";

const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <Link to="#" class="flex items-center">
              <img src={logo} class="h-14 mr-3" alt="Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                Mtm Petshop
              </span>
            </Link>
          </div>
          <div class="flex  gap-20">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-black">
                Contact Us
              </h2>
              <div className="text-gray-700 mb-3">
                <p>Mtm Veterinary Medicels & PetShop</p>
                <p>
                  Pookotumpadam <br />
                  kerala <br />
                  india
                </p>
              </div>

              <div className="text-gray-700">
                <p>test@gmail.com</p>
                <p>8089371919</p>
              </div>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-black">
                Account
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link to="#" className="hover:underline ">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-black">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link to="#" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    For Bussnes
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-black">
                Resources
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link to="#" className="hover:underline">
                    Help
                  </Link>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-600">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Mtm ™
            </a>
            . All Rights Reserved.
          </span>

          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#">
              <img src={Whatsapp} className="w-5" alt="" />
            </Link>

            <Link to="#">
              <img src={instagram} className="w-5" alt="" />
            </Link>

            <Link to="#">
              <img src={Facebook} className="w-5" alt="" />
            </Link>

            <Link to="#">
              <img src={Telegram} className="w-5" alt="" />
            </Link>

            <Link to="#">
              <img src={Twitter} className="w-5" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
