import React, { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [navigation, setNavigation] = useState("users");
  const [items, setItems] = useState();

  useEffect(() => {
    console.log("useEffect run!");
    fetch(`https://jsonplaceholder.typicode.com/${navigation.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [navigation]);

  function clickHandler(e) {
    setNavigation(e.target.innerText);
  }

  return (
    <>
      <h1 className="title">Welcome back!</h1>
      <div className="navigation">
        <button onClick={clickHandler}>Users</button>
        <button onClick={clickHandler}>Posts</button>
        <button onClick={clickHandler}>Comments</button>
      </div>

      <div className="content">
        {items &&
          items.map((item) => {
            return <pre key={Math.random()}>{JSON.stringify(item)}</pre>;
          })}
      </div>
    </>
  );
};

export default Home;
