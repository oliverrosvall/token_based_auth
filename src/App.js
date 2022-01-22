import { BrowserRouter, Route, Routes } from "react-router-dom";
import useToken from "./hooks/useToken";
import logo from "./logo.svg";
import { Login } from "./login/login";
import Preferences from "./preferences/preferences";
import Dashboard from "./dashboard/dashboard";
import "./App.css";
import "./styles/main.scss";

function App() {
  const { token, setToken } = useToken();

  // check if a token is avalible
  if (!token) {
    return <Login setToken={setToken} />;
  }

  // return app if token is avalible
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
