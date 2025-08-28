import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const history = useHistory();
  return (
    <>
      <h1>Welcome to My Home Page</h1>
      <button onClick={() => history.push("/login")}>Log In</button>
    </>
  );
}

export default Home;
