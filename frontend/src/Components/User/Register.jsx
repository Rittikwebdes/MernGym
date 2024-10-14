import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";



export default function Register() {
  const {userRegister} = useAuth()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    userRegister(name , email , password)
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen  md:p-0 p-6">
          <form action="" onSubmit={handleSubmit}>
            <div className="border shadow-md shadow-slate-500 p-6 backdrop-blur-md space-y-5 rounded-md ">
              <h1 className="font-bold text-4xl text-white">Register Here</h1>
              <div>
                <label htmlFor="" className="text-white">
                  Name:
                </label>{" "}
                <br />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="bg-transparent border p-2 w-full text-white rounded-full"
                />
              </div>
              <div>
                <label htmlFor="" className="text-white">
                  Email:
                </label>{" "}
                <br />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="bg-transparent border p-2 w-full text-white rounded-full"
                />
              </div>
              <div>
                <label htmlFor="" className="text-white">
                  Password:
                </label>{" "}
                <br />
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className="bg-transparent border p-2 w-full text-white rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-9">
                  <button
                    type="submit"
                    className="text-white before:ease relative h-12 w-40 overflow-hidden border  shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black hover:shadow-black hover:before:-rotate-180 rounded-full"
                  >
                    <span className="relative z-10 font-bold text-2xl ">
                      Register
                    </span>
                  </button>
                  <p className="text-white text-lg">
                    {" "}
                    Already Registerd?{" "}
                    <Link to="/login" className="text-white font-bold underline">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
