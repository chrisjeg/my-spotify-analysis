import { useEffect, useState } from "react";
import { getProfile } from "../api/fetchers";
import { ProfileResponse } from "../api/responseTypes";

export default function useAuthenticatedProfile(){
    const [profile, setProfile] = useState<ProfileResponse>({
      authenticated: false
    });
    useEffect(()=>{
        getProfile().then(response => {
          if(!response.authenticated){
            window.location.href = "/auth/spotify"
          } else {
            setProfile(response);
          }
        })
      },[]);
    return profile;
}