import React from "react";

const SupportedCompanies: React.FC = () => {
  // Sample data based on the provided image and GUIITAR context
  const companies = [
    {
      logo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743840088/green_global_aggrovation_logo_dc0qbh.jpg",
      name: "Green Global Aggrovation PVT LTD",
      founder: "Mr. Shubham Upadhyay",
      description: "A smart, fully automated and sustainable plant growing pod",
    },
    {
      logo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743840087/1691076951017_uo72o5.jpg",
      name: "Healthy Naari",
      founder: "Mr. Anuj Rathore",
      description: "Sanitary Pad and Health Kit development",
    },
    {
      logo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743840065/1680863189939_m3apmw.jpg",
      name: "SwasthVritta Health Solutions LLP",
      founder: "Mr. Jinendradutt Sharma",
      description: "Telemedicine platform for Health Promotion & Management",
    },
    // {
    //   logo: "",
    //   name: "",
    //   founder: "",
    //   description:
    //     "",
    // },

    // Companies Format
    // {
    //   logo: "",
    //   name: "",
    //   founder: "",
    //   description:
    //     "",
    // },
  ];

  return (
    <>
      <div className="main-content flex justify-center items-center my-[100px] max-[768px]:my-[50px] max-[480px]:my-[30px]">
        <div className="w-[90%] max-w-[1400px] flex flex-col items-center gap-[50px] max-[1024px]:gap-[40px] max-[768px]:gap-[30px] max-[480px]:gap-[20px]">
          {/* Companies Grid */}
          <div className="info-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[30px] w-full">
            {companies.map((company, index) => (
              <div
                key={index}
                className="company-card flex flex-col justify-center items-center text-center rounded-[15px] p-[20px] gap-[15px] max-[768px]:p-[15px] max-[480px]:p-[10px]"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="h-[100px] w-auto object-contain max-[768px]:h-[80px] max-[480px]:h-[60px]"
                />
                <h3 className="text-[#2b5482] text-[1.5rem] font m-0 max-[768px]:text-[1.25rem] max-[480px]:text-[1rem]">
                  {company.name}
                </h3>
                <p className="text-[#333] text-[1rem] font-semibold max-[768px]:text-[0.9rem] max-[480px]:text-[0.875rem]">
                  Founder: {company.founder}
                </p>
                <p className="text-[#333] text-[0.95rem] max-[768px]:text-[0.85rem] max-[480px]:text-[0.8rem]">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportedCompanies;
