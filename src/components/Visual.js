import React from "react";

export default function Visual() {
  return (
    <section id="visual-journey" className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Our Visual Journey
        </h2>
        <p className="text-center text-lg mb-8">
          Comprehensive Technology Solutions
        </p>

        <div className="flex justify-center items-center gap-4 overflow-x-auto">
          {/* Left Image */}
          <div className="flex-shrink-0 w-1/4 md:w-1/6 flex justify-center">
            <img
              src="https://website-container.s3.ap-south-1.amazonaws.com/Visual/visual-2.png"
              alt="Visual Journey Part 2"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Center Image (Reduced Size) */}
          <div className="flex-shrink-0 w-1/2 md:w-1/3 flex justify-center">
            <img
              src="https://website-container.s3.ap-south-1.amazonaws.com/Visual/visual-1.png"
              alt="Visual Journey Part 1"
              className="w-3/4 h-auto object-contain"
            />
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 w-1/4 md:w-1/6 flex justify-center">
            <img
              src="https://website-container.s3.ap-south-1.amazonaws.com/Visual/visual-3.png"
              alt="Visual Journey Part 3"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from "react";

// export default function Visual() {
//   return (
//     <section id="visual-journey" className="py-10 bg-gray-900 text-white">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold mb-4 text-center">
//           Our Visual Journey
//         </h2>
//         <p className="text-center text-lg mb-8">
//           Comprehensive Technology Solutions
//         </p>

//         <div className="flex justify-center items-center gap-4 overflow-x-auto">
//           {/* Left Image */}
//           <div className="flex-shrink-0 w-1/8 md:w-1/6 lg:w-1/4 flex justify-center">
//             <img
//               src="visual/visual-2.png"
//               alt="Visual Journey Part 2"
//               className="w-full h-auto object-contain"
//             />
//           </div>

//           {/* Center Image (Larger Size) */}
//           <div className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/2 flex justify-center">
//             <img
//               src="visual/visual-1.png"
//               alt="Visual Journey Part 1"
//               className="w-3/4 h-auto object-contain"
//             />
//           </div>

//           {/* Right Image */}
//           <div className="flex-shrink-0 w-1/8 md:w-1/6 lg:w-1/4 flex justify-center">
//             <img
//               src="visual/visual-3.png"
//               alt="Visual Journey Part 3"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
