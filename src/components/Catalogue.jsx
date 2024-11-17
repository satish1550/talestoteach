import React from "react";

export default function Catalogue() {
  return (
    <div className="w-screen h-full min-h-screen text-white font-serif pb-5 bg-[#82a1fd]">
      <div className="flex items-center justify-between mx-36 my-20">
        <h1 className="text-6xl font-light">Story Books</h1>
        <button className="h-10 w-fit bg-[#EEB4E7] font-bold rounded-full hover:bg-pink-400 transition duration-300 px-3 text-black">
          VIEW FULL CATALOGUE
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Bablu Section */}
        <div className="relative w-96">
          <img
            src="/images/catalogue1.png"
            alt="Bablu"
            className="w-80 h-[470px] rounded-lg mx-auto"
          />
          <p className="bg-white text-black text-xl font-light rounded-xl p-5 mt-4 shadow-md mx-auto">
            Join Bablu, the mischievous monkey, on his adventures with
            electricity. Through his antics, we learn about the basics of
            electricity and the importance of safety.
          </p>
        </div>

        {/* Mother Ant Section */}
        <div className="relative w-96">
          <img
            src="/images/catalogue2.png"
            alt="Mother Ant"
            className="w-80 h-[470px] rounded-lg mx-auto"
          />
          <p className="bg-white text-black text-xl font-light rounded-xl p-5 mt-4 shadow-md mx-auto">
            Journey with a mother ant as she searches for her lost son in the
            forest. Discover the food habits of different animals and learn
            about compassion and respect along the way.
          </p>
        </div>

        {/* Scientist Grandpa Section */}
        <div className="relative w-96">
          <img
            src="/images/catalogue3.png"
            alt="Scientist Grandpa"
            className="w-80 h-[470px] rounded-lg mx-auto"
          />

          {/* Text on Image */}
          <span
            className="absolute text-3xl top-36 left-[124px] font-bold text-pink-500"
            style={{
              fontStyle: "normal",
              color: "rgb(245, 48, 152)",
              fontKerning: "none",
              textDecoration: "none",
            }}
          >
            Grandpa
          </span>
          <p className="bg-white text-black text-xl font-light rounded-xl p-5 mt-4 shadow-md mx-auto">
            Explore a college student's fond memories with his neighbor,
            Scientist Grandpa. Through their stories, we understand how
            chemistry is part of our daily lives.
          </p>
        </div>
      </div>
    </div>
  );
}
