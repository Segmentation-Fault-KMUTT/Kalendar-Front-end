const RowContainer = ({ children }: { children: JSX.Element }) => (
  <div className="row-container">{children}</div>
);

const Row = ({
  className,
  children,
}: {
  className?: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <RowContainer>
    <div className={`row ${className || ""}`}>{children}</div>
  </RowContainer>
);

type colsize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
const Col = ({
  size,
  myauto = true,
  className,
  children,
  pX,
}: {
  size?: colsize;
  myauto?: boolean;
  className?: string;
  children?: JSX.Element;
  pX?: number;
}) => (
  <div
    className={`col${size ? "-" + size : ""} ${myauto ? "my-auto" : ""} ${
      className || ""
    } ${typeof pX === "number" ? "px-" + pX : ""}`}>
    {children || <></>}
  </div>
);

export { Row, Col };
