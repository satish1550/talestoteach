import React from "react";

export default function Home() {
  return (
    <div className="w-screen h-full min-h-screen flex items-center justify-between font-serif bg-[#82a1fd] relative">
      <div className="flex h-screen justify-start items-start w-3/5">
        <div className="m-20 flex flex-col items-start">
          <div className="flex items-center bg-[#DFFD6E] w-[80%] rounded-t-[40px] h-32 px-3">
            <img src="/images/home2.png" alt="home2" className=" h-16 w-16 mr-3 -mt-[30px]" />
            <h1 className="text-5xl font-[Domine] -mt-[30px]">Tales To Teach</h1>
          </div>
          <div className="bg-white w-[110%] rounded-[40px] py-5 px-10 mt-[-35px] shadow-lg">
            <h1 className="text-[96px] font-normal mb-5">Tales To Teach</h1>
            <h2 className="text-2xl font-semibold mb-3">Learn Through Stories</h2>
            <p className="text-2xl font-light mb-5">
              Building FUNdamental Knowledge & skills in children with the help of Stories.
            </p>
            {/* <button className="h-9 w-32 bg-pink-300 font-semibold rounded-2xl">KNOW MORE</button> */}
          </div>
        </div>
      </div>

      {/* Right Side - Bottom Image */}
      <div className="w-1/2 h-full">
        <img
          src="/images/home1.png"
          alt="Satish"
          className="absolute bottom-0 right-0 h-[100%] w-auto object-cover"
        />
      </div>
    </div>

  );
}


