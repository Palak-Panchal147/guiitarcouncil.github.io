import React from "react";

const Ssip: React.FC = () => {
  return (
    <>
      {/* Main Content */}
      <div className="main-content flex justify-center items-center my-[100px] max-[768px]:my-[50px] max-[480px]:my-[30px]">
        <div className="w-[90%] max-w-[1400px] flex flex-col items-center gap-[50px] max-[1024px]:gap-[40px] max-[768px]:gap-[30px] max-[480px]:gap-[20px]">
          {/* SSIP Logo */}
          <div className="image-car flex justify-center items-center rounded-[15px] p-[40px] bg-[#f0f8ff] shadow-[0_4px_8px_rgba(0,0,0,0.1)] border-2 border-[#ccc] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px]">
            <img
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068561/as4-new_pufqeo.png"
              alt="SSIP 2.0 Logo"
              className="h-[180px] w-auto object-contain max-[768px]:h-[120px] max-[480px]:h-[100px]"
            />
          </div>

          {/* SSIP Information */}
          <div className="info-container flex flex-col justify-center items-center text-center rounded-[15px] p-[40px] gap-[30px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px]">
            <h2 className="text-[#2b5482] text-[4rem] font m-0 max-[1024px]:text-[3rem] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]">
              About SSIP 2.0
            </h2>
            <p className="text-[#333] text-[1.2rem] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
              The Student Startup and Innovation Policy (SSIP) 2.0, launched by
              the Gujarat Government in January 2022, aims to foster innovation
              and entrepreneurship among students and young innovators. It
              supports ideas from concept to commercialization, offering
              financial assistance, mentorship, and infrastructure across
              traditional and emerging technologies.
            </p>

            {/* Structured Information */}
            <div className="details-grid grid grid-cols-1 gap-[20px] w-full text-left">
              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Eligibility
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>
                    Students up to age 35 from any educational institute in
                    Gujarat.
                  </li>
                  <li>Innovative ideas with commercialization potential.</li>
                  <li>
                    No prior funding for the same idea/IPR from other sources.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Financial Support
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>
                    <strong>PoC/Prototype Grant:</strong> Up to ₹2.5 lakh for
                    higher education students; ₹20,000 for school students
                    (Class 9-12).
                  </li>
                  <li>
                    <strong>IP Support:</strong> Up to ₹25,000 for patent filing
                    via i-Hub IPFC.
                  </li>
                  <li>
                    <strong>Sustenance Allowance:</strong> ₹20,000/month (or
                    ₹25,000/month with a woman co-founder) for 1 year, post-PoC,
                    for registered startups.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Application Process
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>
                    Submit project details via SSIP portal or nodal institutes
                    (e.g., GUIITAR Council).
                  </li>
                  <li>
                    Screening by a scrutiny committee for innovation and
                    feasibility.
                  </li>
                  <li>
                    Funds disbursed in 2-3 installments based on progress.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Additional Benefits
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>
                    Mentorship and access to labs, co-working spaces via nodal
                    institutes.
                  </li>
                  <li>
                    Support for incubation and venture capital through i-Hub and
                    GVFL.
                  </li>
                  <li>
                    Focus on inclusivity with higher allowances for women-led
                    startups.
                  </li>
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="funding-btn-container flex justify-center gap-[40px] max-[480px]:gap-[20px]">
              <div className="funding-btn">
                <a
                  href="https://drive.google.com/drive/folders/1EspgxXUoavBlETSnxstEfpMGsI_fCFma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about SSIP 2.0"
                >
                  <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-[#2b5482] text-white border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                    Learn More
                  </button>
                </a>
              </div>
              <div className="funding-btn">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apply for SSIP 2.0 funding"
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

export default Ssip;
