import { useState } from "react";

// custom hook
export default function useToken() {
  // get token from local storage
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const token = JSON.parse(tokenString);
    return token?.token; // the api push object {token: hash}
  };

  // this triggers a component re-render
  const [token, setToken] = useState(getToken());

  // set token to local storage
  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken,
  };
}
