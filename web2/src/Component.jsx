//import { Link } from "react-router-dom";
import { DefaultButton, DefaultTextInput } from "./DefaultComponent";
import { getMatch } from "./helper";

const Loading = () => {
  return (
    <div className="bg-dark w-100 h-100" style={{ position: "absolute", zIndex: "9999" }}>
      <div className="row w-100 h-100">
        <div className="col my-auto">
          <div>
            <div style={{ zoom: "4" }}>
              <div className="spinner-border text-kl-light"></div>
            </div>
          </div>
          <div className="fs-1 fw-bold">Loading</div>
        </div>
      </div>
    </div>
  );
};

const Button = ({ to = "", color = "", type = "button", className = "", onClick = () => {}, children = <></> }) => {
  //console.log(color);
  return (
    <DefaultButton
      className={`${
        getMatch(color, [
          { i: "blue1", o: "bg-blue1" },
          { i: "blue2", o: "bg-blue2" },
          { i: "blue3", o: "bg-blue3" },
          { i: "blue4", o: "bg-blue4" },
          { i: "pink", o: "bg-pink" },
        ]) || "bg-transparent p-0 m-0"
      } ${className}`}
      {...{ to, type, onClick }}
    >
      {children}
    </DefaultButton>
  );
};

const TextInput = ({
  type = "button",
  textColor = "",
  color = "",
  value = "",
  placeholder = "",
  onChange = (val) => {},
  className = "",
  icon = "",
}) => {
  return (
    <DefaultTextInput
      className={`${
        getMatch(color, [
          { i: "light", o: "bg-kl-light" },
          { i: "dark", o: "bg-kl-dark" },
        ]) || " "
      } ${className}`}
      {...{
        type,
        value,
        placeholder,
        onChange,
        icon,
        textColor:
          textColor ||
          getMatch(color, [
            { i: "light", o: "text-kl-dark" },
            { i: "dark", o: "text-kl-light" },
          ]) ||
          "text-kl-light",
      }}
    />
  );
  //let classNameConfig = "";
  //return ()
};

export { Loading, Button, TextInput };
