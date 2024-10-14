import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [isAuth, setIsAuth] = useState(false);
  console.log(token);
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setToken(token);
      setIsAuth(true);
    }
  });
  const url = "http://localhost:3000";
  const userMessage = async (name, email, message) => {
    const data = await axios.post(
      `${url}/contact/message`,
      { name, email, message },
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    );
    toast.success(data.message);
    console.log(data.message);
    if (data.success) {
      window.location.href = "/";
    }
  };

  const userRegister = async (name, email, password) => {
    const { data } = await axios.post(
      `${url}/user/register`,
      { name, email, password },
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(data);
    toast.success(data.message);

    if (data.success) {
      window.location.href = "/login";
    }
  };

  const userLogin = async (email, password) => {
    const { data } = await axios.post(
      `${url}/user/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(data);
    setToken(data.token);
    setIsAuth(true);
    window.localStorage.setItem("jwt", data.token);
    toast.success(data.message);

  };

  const userLogout = async () => {

    setIsAuth(false);
    setToken(" ");
    localStorage.removeItem("jwt");

    toast.success("Logged out succcessfully");
   
  };

  const addDietPlan = async (name, meals, totalCalories) => {
    try {
      const response = await axios.post(
        `${url}/api/diet-plans/createplan`,
        {
          name,
          meals,
          totalCalories,
        },
        {
          withCredentials: true,
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log("Diet plan created:", response.data.message);
      alert(response.data.message);
    } catch (error) {
      console.error("Error creating diet plan:", error);
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          userMessage,
          userRegister,
          userLogin,
          isAuth,
          userLogout,
          addDietPlan,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const useAuth = () => useContext(AuthContext);
