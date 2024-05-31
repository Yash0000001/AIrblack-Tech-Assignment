import React from "react";
import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    whatsapp: "",
    Profession: "",
    Goal: "",
    City: "",
  });

  function changeHandler(event) {
    const [name, value, checked, type] = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="w-full bg-[#0F1014]">
      <div className="w-11/12 mx-auto bg-white rounded-xl ">
        <div className="bg-[#E84D84] rounded-t-xl mb-5 ">
          <p className="text-center text-2xl text-white p-4">
            FILL THE FORM BELOW TO ENQUIRE
          </p>
        </div>
        <form onSubmit={submitHandler} className="flex flex-col ml-5 w-11/12 ">
          <label htmlFor="Name" className="text-lg  font-medium ">
            *Enter your Name
          </label>
          <br />
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Eg. Aneesha Mehra"
            onChange={changeHandler}
            value={formData.Name}
            className="border-2 border-solid p-4 rounded-md"
          />
          <br />

          <label htmlFor="whatsapp" className="text-lg font-medium  ">
            *Enter your Whatsapp Number
          </label>
          <br />
          <div className="space-x-6 w-full">
            <select className="border-2 border-solid p-4 rounded-md w-2/12 ">
              <option>+91</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <input
              type="text"
              name="whatsapp"
              id="whatsapp"
              placeholder="Eg. 0000000000"
              onChange={changeHandler}
              value={formData.whatsapp}
              className="border-2 border-solid p-4 rounded-md w-8/12"
            />
          </div>

          <br />

          <label htmlFor="Profession" className="text-lg font-medium ">
            *Select Your Profession
          </label>
          <br />
          <select
            id="Profession"
            name="Profession"
            value={formData.Profession}
            onChange={changeHandler}
            className="border-2 border-solid p-4 rounded-md"
          >
            <option>Choose the most relevant option</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>

          <br />

          <label htmlFor="Goal" className="text-lg font-medium ">
            *Select Your Goal
          </label>
          <br />
          <select
            id="Goal"
            name="Goal"
            value={formData.Goal}
            onChange={changeHandler}
            className="border-2 border-solid p-4 rounded-md"
          >
            <option>Choose the most relevant option</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>

          <br />

          <label htmlFor="City" className="text-lg font-medium ">
            *Select Your City
          </label>
          <br />
          <select
            id="City"
            name="City"
            value={formData.City}
            onChange={changeHandler}
            className="border-2 border-solid p-4 rounded-md"
          >
            <option>Choose the most relevant option</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>

          <button className="text-xl bg-gradient-to-r from-[#F56563] to-[#E54988] p-4 rounded-md text-white mt-5 mb-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
