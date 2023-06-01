import { useEffect, useState } from "react";
import { getLoggedInUserInfo } from "../api/user"
import { useNavigate }         from "react-router-dom";

type ProtectedPagePropsType ={
  children: React.FC
}

const ProtectedPage = ({ children }: ProtectedPagePropsType) => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null);
  const getCurrentUser = async() => {
    try{
      const reponse = await getLoggedInUserInfo()
      if (reponse.success) {
        message.success(reponse.message)
        setCurrentUser(reponse.data)
      } else {
        throw new Error(reponse.message)
      }
    }catch(error: any){
      message.error(error.message)
    }
  }

  useEffect(() => {
    localStorage.getItem("token")? getCurrentUser(): navigate("/login")
  }, []);

  return (
      <>
        {currentUser &&
        <h1>Bienvenue {currentUser?.name}</h1>
        }
        { children }
      </>
  );
};

export default ProtectedPage;