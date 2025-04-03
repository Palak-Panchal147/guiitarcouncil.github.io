import React from "react";

const ThreeDPrintingWorkshop: React.FC = () => {
  return (
    <div className="min-h-screen overflow-auto bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743593005/two_wihuee.jpg"
          alt="3D Printing Workshop Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Workshop Overview */}
      <section className="py-20 px-6 relative z-1 bg-gray-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2b5482]">
            Explore Next-Gen 3D Printing
          </h2>
          <p className="text-lg text-black text-center mb-12">
            Hosted at the GUIITAR Council, GSFC University, this workshop offers
            hands-on experience with cutting-edge 3D printing technologies,
            expert-led sessions, and access to premium tools for innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-[#2b5482] mb-4">
                Advanced Equipment
              </h3>
              <p className="text-black">
                Work with high-precision DLP printers, multi-material FDM
                systems, and industrial-grade metal 3D printers to bring your
                designs to life with unparalleled accuracy and complexity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-[#2b5482] mb-4">
                Innovative Software
              </h3>
              <p className="text-black">
                Utilize AI-driven design optimization tools, real-time
                simulation software, and slicing platforms to streamline your
                workflow and enhance print quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20 bg-white relative z-1">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2b5482]">
            What You’ll Learn
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b5482] mb-2">
                1. Fundamentals of 3D Printing
              </h3>
              <p className="text-black">
                Understand the principles of additive manufacturing, including
                material properties, layer-by-layer construction, and printer
                mechanics.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b5482] mb-2">
                2. Design for 3D Printing
              </h3>
              <p className="text-black">
                Master CAD modeling techniques optimized for 3D printing, with a
                focus on support structures, tolerances, and material
                efficiency.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b5482] mb-2">
                3. Advanced Materials
              </h3>
              <p className="text-black">
                Explore the use of polymers, composites, and metals in 3D
                printing, including their applications in prototyping and
                production.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b5482] mb-2">
                4. Post-Processing Techniques
              </h3>
              <p className="text-black">
                Learn finishing methods like sanding, painting, and chemical
                smoothing to achieve professional-grade results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Outcomes */}
      <section className="py-20 px-6 bg-gray-200 relative z-1">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2b5482]">
            Course Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b5482] mb-2">
                Build Functional Prototypes
              </h3>
              <p className="text-black">
                Create working prototypes for robotics, wearables, or custom
                tools using advanced 3D printing techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b5482] mb-2">
                Industry-Ready Skills
              </h3>
              <p className="text-black">
                Gain expertise in workflows used by top manufacturing firms,
                preparing you for careers in design and engineering.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b5482] mb-2">
                Portfolio Development
              </h3>
              <p className="text-black">
                Complete the workshop with a portfolio of 3D-printed projects
                showcasing your technical and creative abilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b5482] mb-2">
                Collaborative Innovation
              </h3>
              <p className="text-black">
                Work in teams to solve real-world design challenges, fostering
                collaboration and problem.
              </p>
            </div>
          </div>
          <a
            href="/" //google form link goes here
            className="mt-6 block text-center bg-[#2b5482] text-white py-2 rounded-lg hover:bg-blue-600 transition-colors pointer-events-auto"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* 3D Printers Section */}
      <section id="printers" className="py-20 px-6 bg-white relative z-1">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2b5482]">
            Our 3D Printers
          </h2>
          <p className="text-lg text-black text-center mb-12">
            Experience hands-on learning with these state-of-the-art 3D printers
            available at the GUIITAR Council.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743567142/creality-k1-max-fast-3d-printer-300-300-300-ai-speedy-3d-printer-ultra-fast-desktop-machine-with-smart-ai-functionality-by-wol3d-product-images-orvmxndpib3-p604325565-1-202309021201_jt1qxy.jpg" // Placeholder for Creality Ender 3
                  alt="Creality Ender 3"
                  className="w-full h-58 object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4 text-[#2b5482]">
                Max 300
              </h3>
              <p className="mt-2 text-black">
                A versatile FDM printer known for its reliability and precision,
                perfect for beginners and advanced users alike.
              </p>
            </div>

            <div className="bg-gray-200 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743566690/Original-Prusa-i3MK3S-3D-Bazaar-01_cmqjf9.jpg" // Placeholder for Formlabs Form 3
                  alt="Formlabs Form 3"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4 text-[#2b5482]">
                Prusa i3 mk3s
              </h3>
              <p className="mt-2 text-black">
                A high-precision SLA printer ideal for detailed prototypes and
                intricate designs with smooth surface finishes.
              </p>
            </div>

            <div className="bg-gray-200 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743567141/crxpro_aose5o.avif" // Placeholder for Markforged Mark Two
                  alt="Markforged Mark Two"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4 text-[#2b5482]">
                Creality CR-X
              </h3>
              <p className="mt-2 text-black">
                An industrial-grade printer with continuous fiber reinforcement
                for strong, durable parts suitable for engineering applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 2s ease-in-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ThreeDPrintingWorkshop;
