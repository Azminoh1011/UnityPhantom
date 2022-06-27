import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import Main from "./main";

export default function Home() {
  const [myWallet, setmyWallet] = useState("");
  const {
    isAuthenticated,
    authenticate,
    logout
  } = useMoralis();


  useEffect(()=>{
    if(!isAuthenticated)
      authenticate({
        type: "sol"
      }).then(function(user){
        setmyWallet(user.attributes.solAddress);
      })
  },[]);
  
  return (
    <div>
      {isAuthenticated ? <Main myWallet = {myWallet} /> : <p>Login... Please wait</p>}
    </div>
  )
}