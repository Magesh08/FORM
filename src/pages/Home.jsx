import React, { useState } from "react";
import Card from "../components/Card";
import Form1 from "./Form1";

function Home() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  console.log(data);

  const handleClick = () => {
    setShowForm((prev) => !prev);
  };
  return (
    <div className="p-12 ">
      <div className="pb-8">
        <button
          className="bg-[#1597E4] border-2 rounded-lg py-2 px-4 text-white"
          onClick={handleClick}
        >
          Create Job +
        </button>
      </div>
      <div className="flex flex-wrap">
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      {showForm && (
        <div
          className="bg-black bg-opacity-30 h-screen w-screen absolute top-0 left-0"
          onClick={handleClick}
        ></div>
      )}
      {showForm && <Form1 handleClick={handleClick} setData={setData} />}
    </div>
  );
}

export default Home;
