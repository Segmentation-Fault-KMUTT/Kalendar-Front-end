import { useRef } from "react";
import { Link } from "react-router-dom";

const DefaultButton = ({ to = "", type = "button", className = "", onClick = () => {}, children = <></> }) => {
  const btnRef = useRef(undefined);
  const component = (
    <button
      ref={btnRef}
      type={type}
      className={`btn rounded-3 border-0 ${className}`}
      onClick={() => {
        btnRef.current.blur();
        if (onClick) {
          onClick();
        }
      }}
    >
      <div className="text-kl-light fw-bold">{children}</div>
    </button>
  );
  if (to) {
    return <Link to={to}>{component}</Link>;
  } else {
    return <>{component}</>;
  }
};

const DefaultTextInput = ({
  textColor = "text-kl-light",
  type = "button",
  value = {},
  onChange = (val) => {},
  className = "",
  icon = "",
  placeholder = "",
}) => {
  //console.log(className);
  return (
    <div className={`${className} px-2 py-1`}>
      <div className={`row mx-0`}>
        {icon ? (
          <div className={`col-auto my-auto ps-0 ${textColor}`}>
            <i className={`${icon} fs-3`}></i>
          </div>
        ) : (
          <></>
        )}

        <div className={`col px-0 ${textColor}`}>
          <input
            {...{ type, value, placeholder }}
            className={`form-control border-0 custom rounded-0 bg-transparent ${textColor}`}
            onChange={(e) => {
              if (onChange) {
                onChange(e.target.value);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { DefaultButton, DefaultTextInput };
