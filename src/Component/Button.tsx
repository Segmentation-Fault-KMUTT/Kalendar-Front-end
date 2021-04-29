import { Link } from "react-router-dom";

const Button = ({
  color,
  type,
  disabled,
  className,
  size,
  to,
  onClick,
  children,
}: {
  color?: "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "pink";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  size?: "small" | "large";
  to?: string;
  onClick?: () => void;
  children?: JSX.Element | string;
}) => {
  const colorClass = color ? "bg-" + color : "bg-transparent p-0";
  const sizeClass = size === "small" ? "btn-sm" : size === "large" ? "btn-lg" : "";

  const ButtonEl = () => (
    <button
      className={`btn border-0 rounded-8px ${colorClass} ${sizeClass} ${className || ""}`}
      onClick={(event) => {
        event.currentTarget.blur();
        if (onClick) {
          onClick();
        }
      }}
      {...{ type, disabled }}>
      <div className="text-kl-light fw-bold">{children || <></>}</div>
    </button>
  );

  if (to) {
    return (
      <Link to={to}>
        <ButtonEl />
      </Link>
    );
  } else {
    return <ButtonEl />;
  }
};

export default Button;
