import { useState } from "react";

import toast from "react-hot-toast";

export default function BMI() {
  let [name, setName] = useState("");
  let [height, setHeight] = useState("");
  let [weight, setWeight] = useState("");
  let [gender, setGender] = useState("");
  let [bmi, setBmi] = useState("");

  let calculateBmi = (e) => {
    e.preventDefault();

    if (!name || !height || !weight || !gender) {
      toast.error("Please enter all details");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    console.log(bmiValue);

    if (bmiValue < 18.5) {
      toast.error(
        ` ${name} your BMI is ${bmi}. You are underweight. Consider seeking advide from a healthcare provider.`
      );
      setGender("");
      setHeight("");
      setName("");
      setWeight("");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        `  ${name} your BMI is ${bmi}. You have normal weight. Keep maintaing a healthy lifestyle.`
      );
      setGender("");
      setHeight("");
      setName("");
      setWeight("");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.error(
        `    ${name} your BMI is ${bmi}. You are overweight. Consider seeking advide from a healthcare provider.`
      );
    } else {
      toast.error(
        `  ${name} your BMI is ${bmi}. You are in the obese range. It is recommended to seek advice from a healthcare specialist.`
      );
      setGender("");
      setHeight("");
      setName("");
      setWeight("");
    }
  };

  return (
    <>
      <div className="  w-full   md:py-[100px] py-[100px] px-[20px] text-white">
        <div className="max-w-md mx-auto p-5 backdrop-blur-md  rounded-lg shadow-md shadow-slate-400 mt-10">
          <h2 className="text-2xl font-bold mb-4">Calculate BMI</h2>
          <form className="space-y-4" onSubmit={calculateBmi}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-100"
              >
                Your Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-100"
              >
                Height(CM)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className=" bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-100"
              >
                Weight(KG)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              >
                <option value="" className="text-black">
                  Select Your Gender
                </option>
                <option value="Male" className="text-black">
                  Male
                </option>
                <option value="Female" className="text-black">
                  Female
                </option>
                <option value="Other" className="text-black">
                  Other
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
