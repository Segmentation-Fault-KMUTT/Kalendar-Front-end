import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route /*Link*/,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import { Login, Register } from "./Member";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TransitionApp = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition timeout={1000} classNames="fade" key={location.key}>
        <div style={{ minHeight: "100vh" }}>
          <Switch location={location}>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <div className="text-light">
      <Router>
        <TransitionApp />
      </Router>
    </div>
  );
};

export default App;
