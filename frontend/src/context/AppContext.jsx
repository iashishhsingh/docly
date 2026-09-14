import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const currencySymbol = "\u20B9";

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);

  const [token, setToken] = useState(
    localStorage.getItem("token")
      ? localStorage.getItem("token")
      : false
  );

  const [userData, setUserData] = useState(false);


  // GET ALL DOCTORS
  const getDoctorsData = async () => {

    try {

      const { data } = await axios.get(
        backendURL + "/api/doctor/list"
      );

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }

    } catch (error) {

      toast.error(error.message);

    }

  };


  // GET USER PROFILE
  const loadUserProfileData = async () => {

    try {

      const { data } = await axios.get(
        backendURL + "/api/user/get-profile",
        {
          headers: { token }
        }
      );

      console.log("Profile API Response:", data);

      if (data.success) {

        setUserData(data.userData);

      } else {

        toast.error(data.message);

      }

    } catch (error) {

      toast.error(error.message);

    }

  };


  const value = {

    doctors, getDoctorsData,
    setDoctors,

    currencySymbol,

    token,
    setToken,

    backendURL,

    userData,
    setUserData,

    loadUserProfileData

  };


  useEffect(() => {

    getDoctorsData();

  }, []);


  useEffect(() => {

    if (token) {

      loadUserProfileData();

    } else {

      setUserData(false);

    }

  }, [token]);


  return (

    <AppContext.Provider value={value}>

      {children}

    </AppContext.Provider>

  );

};

export default AppContextProvider;