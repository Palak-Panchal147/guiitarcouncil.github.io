import React from "react";

const Nodal: React.FC = () => {
  return (
    <>
      

      {/* Main Content */}
      <div className="main-content flex justify-center items-center my-[100px] max-[768px]:my-[50px] max-[480px]:my-[30px]">
        <div className="w-[90%] max-w-[1400px] flex flex-col items-center gap-[50px] max-[1024px]:gap-[40px] max-[768px]:gap-[30px] max-[480px]:gap-[20px]">
          {/* Nodal Institute Logo */}
          <div className="image-car flex justify-center items-center rounded-[15px] p-[40px] bg-[#f0f8ff] shadow-[0_4px_8px_rgba(0,0,0,0.1)] border-2 border-[#ccc] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px]">
            <img
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068560/startupguj_wzfm2b.png"
              alt="Nodal Institute Logo"
              className="h-[300px] w-auto object-contain -mt-[40px] max-[768px]:h-[120px] max-[768px]:mt-0 max-[480px]:h-[100px]"
            />
          </div>

          {/* Nodal Institute Information */}
          <div className="info-container flex flex-col justify-center items-center text-center rounded-[15px] p-[40px] gap-[30px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px]">
            <h2 className="text-[#2b5482] text-[4rem] font m-0 max-[1024px]:text-[3rem] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]">
              Nodal Institute Support - GUIITAR Council
            </h2>
            <p className="text-[#333] text-[1.2rem] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
              Startups and innovators in and around Vadodara benefit from the Startup Ecosystem developed by GUIITAR Council, a recognized Nodal Institute under Gujarat Industrial Policy 2020 and SSIP. It provides funding, mentorship, and incubation support to transform innovative ideas into successful ventures across diverse sectors.
            </p>

            {/* Structured Information */}
            <div className="details-grid grid grid-cols-1 gap-[20px] w-full text-left">
              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Eligibility
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>Startups registered in Gujarat (Pvt. Ltd./LLP).</li>
                  <li>Innovators with completed PoC, incubated for 2+ months.</li>
                  <li>No significant ownership (less than 10%) in other companies.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Financial Support
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li><strong>Seed Support:</strong> Up to ₹30 lakh per startup for product development and marketing.</li>
                  <li><strong>Sustenance Allowance:</strong> ₹20,000/month (up to ₹2.4 lakh/year) per approved startup; ₹25,000/month (up to ₹3 lakh/year) if at least one woman founder/co-founder.</li>
                  <li><strong>Skill Development:</strong> Up to ₹1 lakh per approved startup.</li>
                  <li><strong>Acceleration Program:</strong> Up to ₹3 lakh per approved startup for enrollment and participation.</li>
                  <li><strong>Social Impact Assistance:</strong> Up to ₹10 lakh for startups with significant societal impact.</li>
                  <li><strong>Pre-Series A Funding:</strong> ₹50 lakh to ₹3 crore from Gujarat Venture Finance Limited (GVFL) for approved startups.</li>
                  <li><strong>Interest Subsidy:</strong> Additional 1% subsidy, up to 9% max, on term loans under MSME scheme provisions.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Application Process
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>Submit startup project proposal via GUIITAR Council or startupgujarat.in.</li>
                  <li>GUIITAR Council evaluates, validates, and recommends proposals to the Industries Commissioner’s office.</li>
                  <li>Screened by State Level Empowered Committee (SLEC); monthly progress reports required for disbursement.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2b5482] text-[1.5rem] font-bold mb-[10px] max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  Additional Benefits
                </h3>
                <ul className="text-[#333] text-[1.1rem] list-disc pl-[20px] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                  <li>Mentorship and access to facilities (labs, co-working spaces).</li>
                  <li>Support across sectors like AI, cleantech, and healthcare.</li>
                  <li>Networking and incubation support via GUIITAR’s ecosystem.</li>
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="funding-btn-container flex justify-center gap-[40px] max-[480px]:gap-[20px]">
              <div className="funding-btn">
                <a
                  href="https://drive.google.com/drive/folders/1eTX32wmbZudS-lHEtyVyEwtc8CM55iX5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about Nodal Institute"
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
                  aria-label="Apply for Nodal Institute funding"
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

export default Nodal;