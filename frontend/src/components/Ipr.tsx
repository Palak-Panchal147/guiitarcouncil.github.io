import React from "react";

const Ipr: React.FC = () => {
  return (
    <>
     
      {/* Main Content */}
      <div className="main-content flex justify-center items-center my-[100px] max-[768px]:my-[50px] max-[480px]:my-[30px]">
        <div className="w-[90%] max-w-[1400px] flex flex-col items-center gap-[50px] max-[1024px]:gap-[40px] max-[768px]:gap-[30px] max-[480px]:gap-[20px]">
          {/* IPR Logo */}
          <div className="image-car ipr-logo flex justify-center items-center rounded-[15px] p-[40px] bg-[#f0f8ff] shadow-[0_4px_8px_rgba(0,0,0,0.1)] border-2 border-[#ccc] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px]">
            <img
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743089682/one_refxk2.jpg"
              alt="IPR Centre Logo"
              className="h-[300px] w-auto object-contain max-[768px]:h-[120px] max-[480px]:h-[100px]"
            />
          </div>

          {/* IPR Information */}
          <div className="info-container flex flex-col justify-center items-center text-center rounded-[15px] p-[40px] gap-[30px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px]">
            <h2 className="text-[#2b5482] text-[4rem] font m-0 max-[1024px]:text-[3rem] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]">
              Intellectual Property Rights (IPR) Support
            </h2>
            <p className="text-[#333] text-[1.2rem] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
              The IPR Centre, under the Student Startup and Innovation Policy
              (SSIP) and facilitated by institutions like GUIITAR Council and
              GSFC University, supports students, alumni, faculty, and startups
              in protecting their intellectual creations. It oversees IP
              activities, provides end-to-end support, and builds capacity among
              stakeholders.
            </p>

            {/* Structured Information */}
            <div className="details-grid grid grid-cols-1 gap-[20px] w-full text-left">
              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Eligibility
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>Students, faculty, alumni, and startups in Gujarat.</li>
                  <li>Innovations with potential for IP protection.</li>
                  <li>Registered startups meeting Startup India criteria.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Financial Support under SSIP
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>
                    <strong>Patents:</strong> ₹75,000 (Domestic), ₹1.5 lakh
                    (International).
                  </li>
                  <li>
                    <strong>Copyrights:</strong> ₹8,000 per application.
                  </li>
                  <li>
                    <strong>Trademarks:</strong> ₹12,500 per application.
                  </li>
                  <li>
                    <strong>International Registration of Marks:</strong>{" "}
                    ₹50,000.
                  </li>
                  <li>
                    <strong>Industrial Design:</strong> ₹9,000 per application.
                  </li>
                  <li>
                    <strong>Plant Variety Registry:</strong> ₹33,000.
                  </li>
                  <li>
                    <strong>
                      Semiconductor Integrated Circuits Layout-Design Registry
                      (SICLDR):
                    </strong>{" "}
                    ₹15,000 per application.
                  </li>
                  <li>
                    <strong>
                      Includes government fees and IP facilitator costs.
                    </strong>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Activities
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>
                    Oversee IP-related activities at the university level.
                  </li>
                  <li>
                    Facilitate end-to-end IP support and management for
                    creators.
                  </li>
                  <li>
                    Implement IP guidelines across students, alumni, and
                    faculty.
                  </li>
                  <li>
                    Build capacity among stakeholders and provide guidance.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Application Process
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>Apply through GUIITAR Council</li>
                  <li>Submit innovation details and IP requirements.</li>
                  <li>
                    Reviewed by State-level IP Facilitation Centre or university
                    committee.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Additional Benefits
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>Awareness workshops and legal support.</li>
                  <li>Linkages to national and international IP networks.</li>
                  <li>Guidance on IP strategy and commercialization.</li>
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="funding-btn-container flex justify-center gap-[40px] max-[480px]:gap-[20px]">
              <div className="funding-btn">
                <a
                  href="https://drive.google.com/file/d/1krFQgyQ_nasChoSLrFF8zbHzNg1yM9G9/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about IPR Centre"
                >
                  <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-[#2b5482] text-white border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                    Learn More
                  </button>
                </a>
              </div>
              <div className="funding-btn">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0zfawCS7M_Q-uOzlA87ARxNCCx-wNUXAAx_54RAORIF_w6g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apply for IPR Centre support"
                >
                  <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-[#2b5482] text-white border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                    Apply Now!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ipr;
