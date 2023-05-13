import { useState, useRef, useEffect } from "react";

function Form1({ handleClick, setData }) {
  const [step, setStep] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    let jobtitle = e.target.jobtitle.value;
    let company = e.target.company.value;
    let industry = e.target.industry.value;
    let location = e.target.location.value;
    let remotetype = e.target.remotetype.value;
    let minexperience = e.target.minexperience.value;
    let maxexperience = e.target.maxexperience.value;
    let minsalary = e.target.minsalary.value;
    let maxsalary = e.target.maxsalary.value;
    let totalemployee = e.target.totalemployee.value;
    let quick = e.target.quick.checked;
    let external = e.target.external.checked;
    const obj = {
      jobtitle,
      company,
      industry,
      location,
      remotetype,
      minexperience,
      maxexperience,
      minsalary,
      maxsalary,
      totalemployee,
      quick,
      external,
    };
    setData((prev) => [...prev, { id: prev.length, ...obj }]);
    handleClick();
  }

  return (
    // <div className="pt-20">
    <div className=" p-6 max-w-sm w-full mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <form className="w-full pt-3" onSubmit={handleSubmit}>
        <div className="flex justify-between w-full items-center">
          <p className="text-lg text-left">Create a Job</p>
          <p>Step {step}</p>
        </div>
        {/* {step === 1 ? ( */}
        <div className={`relative min-h-[484px]`}>
          <div
            style={{ visibility: step === 1 ? "visible" : "hidden" }}
            className="absolute top-0 left-0"
          >
            <div className="pt-8 pr-6 font-medium text-black text-left">
              Job Title
            </div>
            <input
              type="text"
              name="jobtitle"
              placeholder="ex. UX UI Designer"
              className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />

            <div className="pt-8 pr-6 font-medium text-black text-left">
              Company Name
            </div>
            <input
              type="text"
              name="company"
              placeholder="ex, Google"
              className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />

            <div className="pt-8 pr-6 font-medium text-black text-left">
              Industry
            </div>
            <input
              type="text"
              name="industry"
              placeholder="ex. Information Technology"
              className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />

            <div className="w-full flex gap-2">
              <div>
                <div className="pt-8 pr-6 font-medium text-black text-left">
                  Location
                </div>
                <input
                  type="text"
                  name="location"
                  placeholder="ex. Chennnai"
                  className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                />
              </div>
              <div>
                <div className="pt-8 pr-6 font-medium text-black text-left">
                  Remote type
                </div>
                <input
                  type="text"
                  name="remotetype"
                  placeholder="ex, in-office"
                  className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <div
                className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs mt-12 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => setStep(2)}
              >
                next
              </div>
            </div>
          </div>
          <div
            style={{ visibility: step === 2 ? "visible" : "hidden" }}
            className="absolute top-0 left-0"
          >
            <div className="w-full flex gap-2 items-end">
              <div>
                <div className="pt-8 pr-6 font-medium text-black text-left">
                  Experience
                </div>
                <input
                  type="number"
                  name="minexperience"
                  placeholder="Minimum"
                  className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                />
              </div>
              <div className="">
                <input
                  type="number"
                  name="maxexperience"
                  placeholder="Maximum"
                  className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                />
              </div>
            </div>
            <div className="w-full flex gap-2 items-end">
              <div>
                <div className="pt-8 pr-6 font-medium text-black text-left">
                  Salary
                </div>
                <input
                  type="number"
                  name="minsalary"
                  placeholder="Minimum"
                  className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="maxsalary"
                  placeholder="Maximum"
                  className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                />
              </div>
            </div>
            <div className="pt-8 pr-6 font-medium text-black text-left">
              Total employee
            </div>
            <input
              type="number"
              name="totalemployee"
              placeholder="ex. 100"
              className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />

            <div className="pt-8 pr-6 font-medium text-black text-left">
              Apply type
            </div>
            <fieldset className="w-full justify-start flex pt-3 gap-4">
              <div className="flex">
                <input
                  type="radio"
                  value={"quick"}
                  name="quick"
                  placeholder="UX UI Designer"
                  className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0  outline-none focus:outline-none focus:ring "
                />
                <p>Quick apply</p>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  value={"external"}
                  name="external"
                  placeholder="UX UI Designer"
                  className=" pl-4 px-3 py-3 cursor-pointer placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0  outline-none focus:outline-none focus:ring "
                />
                <p>External apply</p>
              </div>
            </fieldset>
            <div className="flex justify-end">
              <button
                className="bg-sky-500 text-white cursor-pointer active:bg-sky-600 font-bold uppercase text-xs mt-12 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    // </div>
  );
}

export default Form1;
