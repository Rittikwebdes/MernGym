import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

export default function Contact() {
  const { userMessage } = useAuth();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    userMessage(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <div className="md:py-[140px] py-[150px] px-[30px] text-white">
        <div className="max-w-lg mx-auto backdrop-blur-md p-5  rounded-lg shadow-md shadow-slate-400">
          <div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            </div>
            <form className="space-y-4" onSubmit={handleChange}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-100"
                >
                  Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 bg-transparent focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-100"
                >
                  Email:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className=" bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-100"
                >
                  Message:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className=" bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
