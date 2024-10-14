import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <>
      <div className="py-[100px] md:px-[150px]">
        <div className=" space-y-4 ">
          <div className="md:mx-8 mx-2">
            <h1 className="text-6xl">
              {" "}
              <span className="text-8xl">L</span>ET'S <br />{" "}
              <span className="text-8xl">W</span>ORKOUT <br />
              <span className="text-8xl">T</span>OGETHER
            </h1>
          </div>
          <div className="mx-10 my-3 text-2xl ">
            <p>YOUR JOURNEY TO FITNESS STARTS HERE...</p>
          </div>
          <div className="md:flex  mx-8 gap-6 md:my-4 md:py-1 py-4 md:space-y-0 space-y-6 ">
            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
          <Link to="/memberships">    <span className="relative z-10">START YOUR JOURNEY</span></Link>
            </button>
            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
              <span className="relative z-10">DISCOVER YOUR PLANS</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
