import React from "react";

export default function About() {
  return (
    <div className="w-screen h-full min-h-screen flex flex-col lg:flex-row items-center justify-between font-serif bg-[#dffd6e]">
      <div className="flex-1 w-full lg:w-1/2">
        <img
          src="/images/about1.png"
          alt="Satish"
          className="w-fit h-screen object-cover"
        />
      </div>
      <div className="flex-1 w-full lg:ml-[5%] mr-[5%]">
        <div className="flex items-center bg-[#EEB4E7] w-[70%] rounded-t-[40px] h-28 px-3">
          <h1 className="text-5xl font-light ml-5 pb-6">About Us</h1>
        </div>
        <div className="bg-white w-[100%] rounded-[40px] p-10 mt-[-30px] shadow-lg">
          <p className="text-2xl font-light font-sans leading-relaxed">
            At Tales To Teach, we craft <b>Stories</b> but, not just any stories!

            Our stories make learning Math, Science, Humanities, and
            Languages, enjoyable and easy.
            <br />
            Click here to know more.
          </p>
        </div>
      </div>
    </div>
  );
}
