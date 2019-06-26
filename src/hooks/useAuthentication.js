import { useEffect } from "react";
export default function useAuthentication(){
    useEffect(()=>{
        fetch("/api/profile").then(x => x.json()).then(response => {
          if(!response.authenticated){
            window.location.href = "/auth/spotify"
          }
        })
      },{})
}