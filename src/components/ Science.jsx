import React from "react";

export default function Science() {
    return (
        <div className="w-screen h-full min-h-screen flex flex-col lg:flex-row items-center justify-between font-serif bg-[#DFFD6E]">
            <div className="w-[50%] flexflex-col m-20">
                <h1 className="text-7xl pb-8">Science Theatre</h1>
                <div className="flex-1 w-full">
                    <div className="bg-white w-[100%] rounded-[40px] p-10 shadow-lg">
                        <p className="text-2xl font-light font-sans leading-relaxed">

                            Welcome to Science Theatre, where students turn stories into engaging theatrical performances! More than just acting, they collaborate to design props, create costumes, and set up stages, bringing lessons to life. This hands-on approach makes learning fun while building crucial 21st-century skills like creativity, communication, collaboration, and critical thinking. Science Theatre transforms traditional lessons into immersive, interactive experiences, making learning an exciting adventure for students.
                        </p>
                        <p className="text-2xl font-light font-sans leading-relaxed">Let the show begin!</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mr-20">
                <div className="">
                    <img
                        src="/images/science1.png"
                        alt="Satish"
                        className="w-[500px] object-cover"
                    />
                </div>
                <div className="">
                    <img
                        src="/images/science2.png"
                        alt="Satish"
                        className="w-[500px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
