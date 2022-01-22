import { useState } from "react";

export default function useToken() {
  // get token from session storage
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const token = JSON.parse(tokenString);
    return token?.token; // the api push object {token: hash}
  };

  // this line triggers a componente re-render
  const [token, setToken] = useState(getToken());

  // set token to session storage
  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken,
  };
}
