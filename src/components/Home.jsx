import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const history = useHistory();
  return (
    <>
      <h1>Welcome to {import.meta.env.VITE_TITLE}</h1>
      <button onClick={() => history.push("/login")}>Log In</button>
    </>
  );
}

export default Home;
