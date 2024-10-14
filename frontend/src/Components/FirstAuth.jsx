import { Link } from "react-router-dom";

const FirstAuth = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap justify-center items-center space-y-4 h-[90vh]">
        <p className="text-3xl text-white mt-[150px]">
          You need to login first to access this....{" "}
          <span className="text-2xl">&#128540;</span>
        
        </p>
       <Link to="/login" className="bg-black p-4 text-3xl hover:bg-white hover:text-black duration-100 text-white rounded-full">Login Here</Link>
      </div>
    </>
  );
};

export default FirstAuth;
