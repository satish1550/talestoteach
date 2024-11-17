// import React from "react";

// export default function Team() {
//   const teamMembers = [
//     { name: "Raviteja K", role: "CMO", img: "/images/default.png" },
//     { name: "Vamsi Krishna", role: "CEO", img: "/images/default.png" },
//     { name: "Siddhartha", role: "CTO", img: "/images/default.png" },
//     { name: "Sudarshan", role: "COO", img: "/images/default.png" },
//   ];

//   return (
//     <div className="w-screen h-screen font-serif pb-5">
//       {/* Top Section */}
//       <div className="flex items-center justify-center my-12">
//         <h1 className="text-4xl text-white font-normal text-center">
//           The Founders
//         </h1>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-wrap justify-evenly gap-10 px-5 bg-[#82a1fd]">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-end w-72 h-96 bg-white rounded-2xl shadow-lg"
//           >
//             <img
//               src={member.img}
//               alt={member.name}
//               className="h-60 w-56 rounded-lg border border-dotted"
//             />
//             <div className="flex flex-col items-center justify-center bg-pink-300 w-full rounded-b-2xl p-5">
//               <h1 className="text-lg font-semibold">{member.name}</h1>
//               <span className="text-sm font-normal pt-2">{member.role}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
