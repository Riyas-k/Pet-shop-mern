import React, { useState } from "react";
import { ImSpinner } from "react-icons/im";

import Banner from "../../assets/images/hero-img.jpg";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../Firebase/FirebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);

  const [ProductImage, setProductImage] = useState("");

  const [ProductName, setProductName] = useState("");
  const [ProductDesc, setProductDesc] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [Price, Setprice] = useState("");
  const [Offer, setOffer] = useState("");
  const [Brand, setBrand] = useState("");


  

  const addProduct = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const docRef = await collection(db, "Products");
      const storageRef = ref(
        storage,
        `ProductImages/${Date.now() + ProductImage.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, ProductImage);

      uploadTask.on(
        () => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Image Not Uploaded",
          });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              ImgUrl: downloadURL,
            });

            console.log("ImgUrl =", downloadURL);

            setLoading(false);
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Product  added successfully.",
            });
          });
        }
      );
    } catch (err) {
      setLoading(false);

      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the Product.",
      });
    }
  };



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
            <img src={Banner} className="w-full rounded-xl" alt="" />
          </div>

          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-6">Add Product detail's </h2>
            <form onSubmit={addProduct}>
              <div className="mb-3">
                <label
                  htmlFor="Product Name"
                  className="block text-gray-700 text-xl font-bold mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                  placeholder="Enter Product Name"
                  value={ProductName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Description"
                  className="block text-gray-700 text-xl font-bold mb-4"
                >
                  Description
                </label>
                <input
                  type="text"
                  className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                  placeholder="Enter Product Description"
                  value={ProductDesc}
                  onChange={(e) => setProductDesc(e.target.value)}
                />
              </div>

              <div className="flex gap-11  items-center  mb-3">
                <div>
                  <label
                    htmlFor="Prise"
                    className="block text-gray-700 text-xl font-bold mb-4"
                  >
                    Prise
                  </label>
                  <input
                    type="number"
                    className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                    placeholder="Enter Product Prize"
                    value={Price}
                    onChange={(e) => Setprice(e.target.value)}
                  />
                </div>

                <div>
                  <span className=" text-gray-700 text-xl font-bold ">
                    Category
                  </span>

                  <select
                    className="w-full mt-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10 font-bold"
                    value={ProductCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  >
                    <option className="text-2xl">Select Category</option>
                    <option className="text-2xl" value="Meals">
                      Meals
                    </option>
                    <option className="text-2xl" value="Arabian Food">
                      Arabian Food
                    </option>

                    <option className="text-2xl" value="Burger">
                      Burgers
                    </option>
                    <option className="text-2xl" value="Juices">
                      juices
                    </option>
                    <option className="text-2xl" value="Sandwiches">
                      Sandwiches
                    </option>
                    <option className="text-2xl" value="IceCreams">
                      IceCreams
                    </option>
                    <option className="text-2xl" value="Pizzas">
                      Pizzas
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between  mb-3">
                <div>
                  <span className=" text-gray-700 text-xl font-bold ">
                    Brand
                  </span>

                  <select
                    className="w-full mt-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10 font-bold"
                    value={Brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option className="text-lg">Select Category</option>
                    <option className="text-2xl" value="Meals">
                      Meals
                    </option>
                    <option className="text-2xl" value="Arabian Food">
                      Arabian Food
                    </option>

                    <option className="text-2xl" value="Burger">
                      Burgers
                    </option>
                    <option className="text-2xl" value="Juices">
                      juices
                    </option>
                    <option className="text-2xl" value="Sandwiches">
                      Sandwiches
                    </option>
                    <option className="text-2xl" value="IceCreams">
                      IceCreams
                    </option>
                    <option className="text-2xl" value="Pizzas">
                      Pizzas
                    </option>
                  </select>
                </div>

                <div className="ml-12">
                  <span className=" text-gray-700 text-xl font-bold ">
                    Offer
                  </span>

                  <select
                    className="w-full mt-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10 font-bold"
                    value={Offer}
                    onChange={(e) => setOffer(e.target.value)}
                  >
                    <option className="text-2xl">Select Category</option>
                    <option className="text-2xl" value="Meals">
                      Meals
                    </option>
                    <option className="text-2xl" value="Arabian Food">
                      Arabian Food
                    </option>

                    <option className="text-2xl" value="Burger">
                      Burgers
                    </option>
                    <option className="text-2xl" value="Juices">
                      juices
                    </option>
                    <option className="text-2xl" value="Sandwiches">
                      Sandwiches
                    </option>
                    <option className="text-2xl" value="IceCreams">
                      IceCreams
                    </option>
                    <option className="text-2xl" value="Pizzas">
                      Pizzas
                    </option>
                  </select>
                </div>
              </div>

              <div className="">
                <span className=" block text-gray-700 text-2xl font-bold mb-2 ">
                  Image
                </span>
                <input
                  type="file"
                  className="font-medium "
                  onChange={(e) => setProductImage(e.target.files[0])}
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

export default AddProduct;
