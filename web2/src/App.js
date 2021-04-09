import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import notfound from "./assets/404.svg";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./Home";
import Main from "./App/Main";
import { Login, Register } from "./Member";
import { Button, Loading } from "./Component";

const Notfound = () => {
  //console.log("Fefee");
  return (
    <div style={{ paddingTop: "200px" }}>
      <div>
        <img src={notfound} style={{ height: "200px" }} alt="404" />
      </div>
      <div className="pt-2 fs-4 fw-light">Sorry, we didn't found what are you looking for :(</div>
      <div className="pt-3">
        <Button color="blue2" to="/">
          BACK HOME
        </Button>
      </div>
    </div>
  );
};

const App = () => {
  const logedinStatus = useRef(undefined);
  const [loaded, setLoaded] = useState(false);
  const [routes, setRoutes] = useState([<div key="d"></div>]);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);
  useEffect(() => {
    if (loaded) {
      logedinStatus.current = true;
      if (logedinStatus) {
        setRoutes([
          <Route key="home" path="/" element={<Home status={logedinStatus.current} />} />,
          <Route key="app" path="/app" element={<Main />} />,
        ]);
      } else {
        setRoutes([
          <Route key="home" path="/" element={<Home status={logedinStatus.current} />} />,
          <Route key="login" path="/login" element={<Login />} />,
          <Route key="reg" path="/register" element={<Register />} />,
        ]);
      }
    }
  }, [loaded]);
  return (
    <div className="App text-kl-light">
      <div>
        {loaded ? <></> : <Loading />}
        <Router>
          <Switch>
            {routes}
            <Route path="*" element={<Notfound />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
