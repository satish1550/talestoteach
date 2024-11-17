import React from "react";

export default function Storytelling() {
  return (
    <div className="w-screen h-screen font-serif bg-[#eeb3e7] flex flex-col items-center justify-center">
      <h1 className="text-[60px] text-white font-semibold mb-10 text-center">
        Benefits of using Storytelling in Academics
      </h1>

      <div className="flex justify-evenly items-start gap-12 w-full px-10">
        <div className="bg-white rounded-3xl shadow-2xl w-1/2 p-10 flex flex-col items-center">
          <h2 className="text-5xl font-semibold text-center mb-8">
            Academic Benefits
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/academics1.png"
                className="h-12 -mt-2"
                alt="Makes Learning Easier"
              />
              <p className="text-3xl font-medium">Makes Learning Easier</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/academics2.png"
                className="w-10"
                alt="Improved interest on studies"
              />
              <p className="text-3xl font-medium">Improved Interest in Studies</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/academics3.png"
                className="w-10"
                alt="Better Retention of Concepts"
              />
              <p className="text-3xl font-medium">
                Better Retention of Concepts
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/academics4.png"
                className="w-10"
                alt="Application of concepts"
              />
              <p className="text-3xl font-medium">
                Application of Concepts in Daily Life
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl w-1/2 p-10 flex flex-col items-center">
          <h2 className="text-5xl font-semibold text-center mb-8">
            Overall Benefits
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/benefits1.png"
                className="w-10"
                alt="Improves Creativity"
              />
              <p className="text-3xl font-medium">Improves Creativity</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/benefits2.png"
                className="w-10"
                alt="Improves Critical Thinking"
              />
              <p className="text-3xl font-medium">Improves Critical Thinking</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/benefits3.png"
                className="w-10"
                alt="Improves Communication Skills"
              />
              <p className="text-3xl font-medium">
                Improves Communication Skills
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/benefits4.png"
                className="w-10"
                alt="Promotes Collaborative Thinking"
              />
              <p className="text-3xl font-medium ">
                Promotes Collaborative Thinking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
