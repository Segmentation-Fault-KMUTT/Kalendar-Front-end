import logo from "./assets/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "./Component";

//const LongButton = ({to="", })

const Main = ({ children = <></> }) => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div>
        <Link to="/">
          <img style={{ height: "200px" }} src={logo} alt={"logo"}></img>
        </Link>
      </div>
      {children}
    </div>
  );
};

const Home = ({ status = undefined }) => {
  //console.log(status);
  let content = <></>;
  if (status === false) {
    content = (
      <>
        <div className="pt-3">
          <Button to="/login" className="w-150px" color="blue2">
            LOG IN
          </Button>
        </div>
        <div className="pt-1">
          <Button to="/register" className="w-150px" color="blue3">
            REGISTER
          </Button>
        </div>
      </>
    );
  } else if (status === true) {
    content = (
      <>
        <div className="pt-3">
          <Button to="/app" className="w-150px" color="blue4">
            ENTER APP
          </Button>
        </div>
      </>
    );
  }
  return (
    <Main>
      <div className="pt-2 fs-1 fw-bold">Kalendar</div>
      {content}
    </Main>
  );
};

export default Home;
export { Main };
