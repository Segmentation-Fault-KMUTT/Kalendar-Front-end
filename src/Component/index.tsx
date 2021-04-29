import { Link } from "react-router-dom";
import logo from "../logo.svg";

const PaddingContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="pt-5">
      <div style={{ paddingTop: 40 }}>
        <div>
          <Link to="/">
            <img src={logo} width={200} alt="logo" />
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export { PaddingContainer };
