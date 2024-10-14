import { IoMdCheckmark } from "react-icons/io";
export default function Deal() {
  return (
    <>
      <div className=" w-full  md:p-0 p-5   text-white">
        <div className="py-5">
          <div className="flex justify-center my-[100px]">
            <h1 className="text-3xl">Get this opportunity</h1>
          </div>
          <div className="flex flex-wrap md:space-y-0 space-y-5 mt-[-50px] items-center justify-evenly mb-8">
            <div className=' bg-cover bg-center w-[350px] h-[470px] bg-[url("pricing.jpg")] shadow-md shadow-slate-900 hover:scale-105 duration-300'>
              <h1 className="text-blue-300 font-bold p-4 text-3xl text-center">
                QUARTERY <br /> PACKAGE
              </h1>
              <p className="text-white px-4 font-bold text-2xl text-center">
                Rs 18000
              </p>
              <p className="text-white px-4 py-2 text-center">For 3 Months</p>
              <div className=" bg-white text-black p-5 py-10">
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>Equipment</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>All day Training</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>Free Restroom</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>24/7 Skilled Support</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>20 Days Freezing Options</p>
                </div>

                <button className="relative flex h-[50px] my-2 w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                  <span className="relative z-10">JOIN NOW</span>
                </button>
              </div>
            </div>
            <div className=' bg-cover bg-center  w-[350px] h-[470px] bg-[url("pricing.jpg")] shadow-md shadow-slate-900  hover:scale-105 duration-300'>
              <h1 className="text-blue-300 font-bold p-4 text-3xl text-center">
                SEMIANNUAL <br /> PACKAGE
              </h1>
              <p className="text-white px-4 font-bold text-2xl text-center">
                Rs 36000
              </p>
              <p className="text-white px-4 py-2 text-center">For 6 Months</p>
              <div className="p-5 py-10">
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p className="text-white">Equipment</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p className="text-white">All day Training</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p className="text-white">Free Restroom</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p className="text-white">24/7 Skilled Support</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p className="text-white">20 Days Freezing Options</p>
                </div>
                <button className="relative flex h-[50px] my-2 w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                  <span className="relative z-10">JOIN NOW</span>
                </button>
              </div>
            </div>
            <div className=' bg-cover bg-center w-[350px] h-[470px] bg-[url("pricing.jpg")] shadow-md shadow-slate-900 hover:scale-105 duration-300'>
              <h1 className="text-blue-300 font-bold p-4 text-3xl text-center">
                YEARLY <br /> PACKAGE
              </h1>
              <p className="text-white px-4 font-bold text-2xl text-center">
                Rs 70000
              </p>
              <p className="text-white px-4 py-2 text-center">For 12 Months</p>
              <div className=" bg-white text-black p-5 py-10">
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>Equipment</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>All day Training</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>Free Restroom</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>24/7 Skilled Support</p>
                </div>
                <div className="flex items-center justify-between">
                  <IoMdCheckmark className="text-blue-500" size={30} />{" "}
                  <p>20 Days Freezing Options</p>
                </div>

                <button className="relative flex h-[50px] my-2 w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                  <span className="relative z-10">JOIN NOW</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
