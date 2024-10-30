// export default function Values() {
//   return (
//     <section id="values" className="py-20 px-4 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">
//           Our Values
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Integrity */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
//             <img
//               src="/value/Value-Integrity.png"
//               alt="Integrity"
//               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
//               <h3 className="text-xl font-bold mt-4 text-center">Integrity</h3>
//               <p className="mt-2 text-sm">
//                 We prioritize transparency, honesty, and ethics in all our
//                 operations, building trust and long-term partnerships with our
//                 clients and stakeholders.
//               </p>
//             </div>
//           </div>

//           {/* Innovation */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
//             <img
//               src="/value/Value-Innovation.png"
//               alt="Innovation"
//               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
//               <h3 className="text-xl font-bold mt-4 text-center">Innovation</h3>
//               <p className="mt-2 text-sm">
//                 Our focus is innovation. We explore new ideas, push boundaries,
//                 and deliver forward-thinking solutions to empower businesses in
//                 a rapidly changing world.
//               </p>
//             </div>
//           </div>

//           {/* Collaboration */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
//             <img
//               src="/value/Value-Collaboration.png"
//               alt="Collaboration"
//               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
//               <h3 className="text-xl font-bold mt-4 text-center">
//                 Collaboration
//               </h3>
//               <p className="mt-2 text-sm">
//                 Teamwork is vital for our success. We emphasize open
//                 communication and collaboration, working closely with clients to
//                 understand their challenges and craft solutions aligned with
//                 their goals.
//               </p>
//             </div>
//           </div>

//           {/* Sustainability */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-3/4 mx-auto h-84">
//             <img
//               src="/value/Value-Sustainability.png"
//               alt="Sustainability"
//               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
//               <h3 className="text-xl font-bold mt-4 text-center">
//                 Sustainability
//               </h3>
//               <p className="mt-2 text-sm">
//                 We are dedicated to developing sustainable solutions that
//                 benefit our clients and contribute to a better digital
//                 ecosystem.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Values() {
  return (
    <section id="values" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-8">
          {/* Integrity */}
          <div className="relative overflow-hidden rounded-lg shadow-lg md:w-5/6 mx-auto h-80">
            <img
              src="https://website-container.s3.ap-south-1.amazonaws.com/Value/Integrity.png"
              alt="Integrity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end text-center text-white">
              <div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="mt-2 text-sm">
                  We prioritize transparency, honesty, and ethics in all our
                  operations, building trust and long-term partnerships with our
                  clients and stakeholders.
                </p>
              </div>
            </div>
          </div>

          {/* Innovation */}
          <div className="relative overflow-hidden rounded-lg shadow-lg md:w-5/6 mx-auto h-80">
            <img
              src="https://website-container.s3.ap-south-1.amazonaws.com/Value/Value-Innovation.png"
              alt="Innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end text-center text-white">
              <div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="mt-2 text-sm">
                  Our focus is innovation. We explore new ideas, push
                  boundaries, and deliver forward-thinking solutions to empower
                  businesses in a rapidly changing world.
                </p>
              </div>
            </div>
          </div>

          {/* Collaboration */}
          <div className="relative overflow-hidden rounded-lg shadow-lg md:w-5/6 mx-auto h-80">
            <img
              src="https://website-container.s3.ap-south-1.amazonaws.com/Value/Value-Collaboration.png"
              alt="Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end text-center text-white">
              <div>
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="mt-2 text-sm">
                  Teamwork is vital for our success. We emphasize open
                  communication and collaboration, working closely with clients
                  to understand their challenges and craft solutions aligned
                  with their goals.
                </p>
              </div>
            </div>
          </div>

          {/* Sustainability */}
          <div className="relative overflow-hidden rounded-lg shadow-lg md:w-5/6 mx-auto h-80">
            <img
              src="https://website-container.s3.ap-south-1.amazonaws.com/Value/Value-Sustainability.png"
              alt="Sustainability"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex items-end text-center text-white">
              <div>
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="mt-2 text-sm">
                  We are dedicated to developing sustainable solutions that
                  benefit our clients and contribute to a better digital
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
