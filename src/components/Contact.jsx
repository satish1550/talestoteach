import React from "react";

export default function Contact() {
  return (
    <div className="w-screen h-screen font-serif flex flex-row items-center lg:justify-around p-5 bg-[#dffd6e]">
      {/* Left Section */}
      <div className="pl-20 -mr-60">
        <div className="w-[60%]">
          <div className="flex items-center mb-5">
            <img src="/images/home2.png" alt="home2" className="w-16 h-16 mr-3" />
            <h1 className="text-[48px] font-normal">Tales To Teach</h1>
          </div>
          <div className="flex items-center bg-[#EEB4E7] w-full rounded-t-[40px] pb-[40px] pt-10px h-full">
            <h1 className="text-[60px] font-normal text-center">
              We love Children & Children love Stories!
            </h1>
          </div>
        </div>
        <div className="w-[65%] h-60 bg-white rounded-[40px] p-5 shadow-lg mt-[-35px] flex flex-col justify-center items-start">
          <h1 className="text-4xl font-medium">
            talestoteach1@gmail.com
          </h1>
          <hr className="w-full my-3 border-t-[2px] border-gray-800" />
          <p className="text-4xl font-medium">@talestoteach</p>
          <div className="flex gap-3 pt-5">
            <img src="/images/facebook.png" alt="facebook" className="w-12" />
            <img src="/images/twitter.png" alt="twitter" className="w-12" />
            <img src="/images/instagram.png" alt="instagram" className="w-12" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-5">
        <img
          src="/images/contact1.png"
          alt="contact1"
          className="h-80 rotate-[15deg]"
        />
        <img
          src="/images/contact2.png"
          alt="contact2"
          className="h-80 mt-5 lg:mt-32 -ml-10 -rotate-[5deg]"
        />
        <img
          src="/images/contact3.png"
          alt="contact3"
          className="h-80 -rotate-[10deg]"
        />
        <img
          src="/images/contact4.png"
          alt="contact4"
          className="h-80 ml-7 rotate-[10deg]"
        />
      </div>
    </div>
  );
}
