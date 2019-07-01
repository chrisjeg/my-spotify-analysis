import { useEffect } from "react";
import { getProfile } from "../api/fetchers";

export default function useAuthentication(){
    useEffect(()=>{
        getProfile().then(response => {
          if(!response.authenticated){
            window.location.href = "/auth/spotify"
          }
        })
      },[])
}