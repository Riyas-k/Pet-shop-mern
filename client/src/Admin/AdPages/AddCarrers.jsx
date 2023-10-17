import React, { useState } from "react";
import { ImSpinner } from "react-icons/im";
import Swal from "sweetalert2";
import HeroImg from "../../assets/adminicons/adminImgs/diego-ph-fIq0tET6llw-unsplash.jpg";

const AddCarrers = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section className="flex first-line:items-center h-screen  p-10  gap-11">
      {loading ? (
        <ImSpinner
          size={60}
          className="mx-auto animate-spin text-orange-600 text-4xl mt-[200px]"
        />
      ) : (
        <>
          <div className="hidden  flex-1 lg:flex w-1/2 ">
            <img src={HeroImg} className="w-full rounded-xl" alt="" />
          </div>

          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-6">Add Career detail's </h2>
            <form>
              <div className="mb-3">
                <label
                  htmlFor="Product Name"
                  className="block text-gray-700 text-xl font-bold mb-2"
                >
                  Carrer Name
                </label>
                <input
                  type="text"
                  className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                  placeholder="Enter Product Name"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Description"
                  className="block text-gray-700 text-xl font-bold mb-4"
                >
                  Skills
                </label>
                <input
                  type="text"
                  className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                  placeholder="Enter Product Description"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Description"
                  className="block text-gray-700 text-xl font-bold mb-4"
                >
                  Expirence
                </label>
                <input
                  type="text"
                  className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                  placeholder="Enter Product Description"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Description"
                  className="block text-gray-700 text-xl font-bold mb-4"
                >
                  Location
                </label>
                <input
                  type="text"
                  className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                  placeholder="Enter Product Description"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-600  text-white px-4 text-2xl rounded-lg font-medium h-12 w-52 mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default AddCarrers;
