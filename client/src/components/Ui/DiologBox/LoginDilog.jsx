import React, { useState } from "react";
import bannerImg from "../../../assets/adminicons/adminImgs/pets-3715733_1280.jpg"
const LoginDilog = () => {



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dialog-container">
      <div className="bg-white rounded-lg p-4 w-96 text-center dialog-box cursor-pointer">
        <div className="dialog-header flex justify-between">
          <div className="wallet hover">
            <img
              src={bannerImg}
              alt="WalletConnect"
              className=" mx-auto"
            />
          </div>


          <div className="imToken hover">
     
            <h1>imToken</h1>
            <p>Connect To Your imToken Wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDilog;
