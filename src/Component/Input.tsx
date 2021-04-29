import { Col, Row } from "./Container";

const Input = ({
  icon,
  placeholder,
  value,
  type,
  onChange,
}: {
  icon?: string;
  placeholder?: string;
  value: string;
  type?: "text" | "password";
  onChange: (value: string) => void;
}) => {
  const iconEl = icon ? (
    <Col size="auto" className="ps-2 pe-0">
      <div className={"text-kl-light"} style={{ width: 20 }}>
        <i className={icon} />
      </div>
    </Col>
  ) : (
    <></>
  );
  return (
    <div className={`rounded-8px px-1 py-1 ${"border"}`} style={{ overflow: "hidden" }}>
      <Row>
        {iconEl}
        <Col className="px-0">
          <div className={`${"text-kl-light"}`}>
            <input
              type={type || "text"}
              value={value}
              placeholder={placeholder}
              className={`form-control border-0 rounded-0 bg-transparent`}
              onChange={(event) => {
                onChange(event.target.value);
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
  //const className = transparent ? "bg-transparent te": "";
};

export default Input;
