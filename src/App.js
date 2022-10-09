import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLogged");
    if (storedLoggedIn === "1") setIsLogged(true);
  }, []);

  function isLoggedIn(mail, psw) {
    localStorage.setItem("isLogged", "1");
    setIsLogged(true);
  }

  function onLogOut(params) {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
  }

  return (
    <React.Fragment>
      <Header
        onLogOut={onLogOut}
        isLogged={isLogged}
        title="Simple page"
      ></Header>
      {!isLogged && <Login isLoggedIn={isLoggedIn}></Login>}
      {isLogged && <Home></Home>}
    </React.Fragment>
  );
}

export default App;
