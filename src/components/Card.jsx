import React from "react";
import CompanyLogo from "../assets/companyLogo.png";

const Card = ({ data }) => {
  return (
    <div className="max-w-[650px] w-full flex justify-start flex-wrap gap-2 bg-white px-6 py-4 rounded-[10px]">
      <div>
        <img src={CompanyLogo} />
      </div>
      <div>
        <div>
          <div className="text-2xl">{data.jobtitle}</div>
          <div className="text-base">
            {data.company} - {data.industry}
          </div>
          <div className="text-base text-[#7A7A7A]">
            {data.location} ({data.remotetype})
          </div>
        </div>
        <div className="py-6 text-base">
          <div>Full-Time (9.00 am - 5.00 pm IST)</div>
          <div className="pt-2">
            Experience ({data.minexperience} - {data.maxexperience})
          </div>
          <div className="pt-2">
            INR (₹) {data.minsalary} -{data.maxsalary} / Month
          </div>
          <div className="pt-2">{data.totalemployee} employees</div>
        </div>
        <div className="flex gap-6">
          {data.quick && (
            <button className="py-2 px-4 rounded-md text-white bg-[#1597E4] cursor-pointer">
              Apply Now
            </button>
          )}
          {data.external && (
            <button className="py-2 px-4 rounded-md text-[#1597E4] border-2 border-[#1597E4] cursor-pointer">
              External Apply
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
