import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Page from "./components/Page";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/page">
          <Page />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </>
  );
}

export default App;
