import React, { createContext, useState, useEffect, useContext } from "react";

import axiosInstance from "../utils/axiosConfig";
import DesignerTableData from "../DesignerDashboard/DesignerTableData";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [designer,setDesigner] = useState(null);

  const storedUser = localStorage.getItem("user");
  const storedDesigner = localStorage.getItem("designer");
  useEffect(() => {
    // console.log("Stored user:", storedUser);
    if (storedUser || storedDesigner ) {
      const userData = JSON.parse(storedUser);
      const designerData = JSON.parse(storedDesigner);
      setDesigner(designerData);

      setUser(userData);
    }
    setIsLoading(false);
  }, [storedUser,storedDesigner]);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/admin/auth/login", {
        email,
        password,
      });
      const userData = response.data;
      // console.log("userData>>>",userData.token);
      setUser(userData.token);
      localStorage.setItem("user", JSON.stringify(userData.token));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
    setLoading(false);
  };
  const designerLogin = async (email,password) =>{
    try{
      setIsLoading(true);
      const response = await axiosInstance.post('/designer/auth/login',{
        email,
        password
      })
      const designerData = response.data;
      setDesigner(designerData.token)
      localStorage.setItem('designer',JSON.stringify(designerData.token))
      localStorage.setItem("designerId",JSON.stringify(designerData.designer._id))
    }
    catch(error){
      console.error("Login error:", error);
      throw error;
    }
    setIsLoading(false);
  }

  const designerSignup =  async (username,adminEmail,email,password)=>{
    try{
      setLoading(true);
      const response = await axiosInstance.post('/designer/auth/signup',{
        adminEmail,
        username,
        email,
        password
      });
      const designerData = response.data;
      // console.log(designerData);  
      setDesigner(designerData)
      
      localStorage.setItem("designerId",JSON.stringify(designerData._id))
      localStorage.setItem('designer', JSON.stringify(designerData.token))
    }
    catch(error){
      console.error("designerSignup error:", error);
      throw error;
    }
  }

  const signup = async (username, email, password) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/admin/auth/signup", {
        username,
        email,
        password,
      });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
    setLoading(false);
  };

  const userlogout = () => {
    try {
      setLoading(true);
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
    setLoading(false);
  };
  const designerLogout = () => {
    try {
      setLoading(true);
      setUser(null);
      localStorage.removeItem("designer");
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
    setLoading(false);
  };


  return (
    <AuthContext.Provider
      value={{ user,designer, loading, isLoading, login, signup, userlogout ,designerLogin,designerSignup,designerLogout}}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Define useAuth hook to consume the AuthContext
const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
