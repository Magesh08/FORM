import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Form1() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements);
    // () => navigate("/")
  }

  return (
    <div className="pt-20">
      <div class=" p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <form className="w-full pt-3" onSubmit={handleSubmit}>
          <div className="flex justify-between w-full items-center">
            <p className="text-lg text-left">create a job</p>
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
                class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />

              <div className="pt-8 pr-6 font-medium text-black text-left">
                Company Name
              </div>
              <input
                type="text"
                name="company"
                placeholder="ex, Google"
                class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />

              <div className="pt-8 pr-6 font-medium text-black text-left">
                Industry
              </div>
              <input
                type="text"
                name="industry"
                placeholder="ex. Information Technology"
                class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
                    class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
                    class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
                    name="minexprience"
                    placeholder="Minimum"
                    class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    name="maxexprience"
                    placeholder="Maximum"
                    class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
                    class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="maxsalary"
                    placeholder="Maximum"
                    class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
                class=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />

              <div className="pt-8 pr-6 font-medium text-black text-left">
                Apply type
              </div>
              <fieldset className="w-full justify-start flex pt-3 gap-4">
                <div className="flex">
                  <input
                    type="radio"
                    value={"quick"}
                    name="choice"
                    placeholder="UX UI Designer"
                    className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0  outline-none focus:outline-none focus:ring "
                  />
                  <p>Quick apply</p>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    value={"external"}
                    name="choice"
                    placeholder="UX UI Designer"
                    className=" pl-4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0  outline-none focus:outline-none focus:ring "
                  />
                  <p>External apply</p>
                </div>
              </fieldset>
              <div className="flex justify-end">
                <button
                  className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs mt-12 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form1;
