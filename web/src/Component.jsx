const Default = {
  Button: ({ config }) => (
    <button
      type={config.type || "button"}
      className={`btn ${config.className || ""}`}
      onClickCapture={() => {
        if (config.onClick) {
          config.onClick();
        }
      }}
      style={{ width: config.width || "auto" }}
    >
      {config.inner}
    </button>
  ),
  InputGroup: ({ config }) => (
    <div className="container">
      <div
        className={`row mx-auto fs-4 ${config.containerClassName}`}
        style={{ maxWidth: config.width || "300px" }}
      >
        {config.icon ? (
          <div className="col text-center my-auto">
            <i className={config.icon}></i>
          </div>
        ) : (
          <></>
        )}
        <div className="col-auto px-0" style={{ width: "81%" }}>
          <input
            autoComplete="off"
            type={config.type || "text"}
            className={`form-control rounded-0 border-0 py-2 ${config.inputClassName}`}
            placeholder={config.placeholder || ""}
            value={config.value || ""}
            onChange={(e) => {
              if (config.onChange) {
                config.onChange(e.target.value);
              }
            }}
          ></input>
        </div>
      </div>
    </div>
  ),
};

const Form = {
  InputGroup1: ({ config }) => (
    <Default.InputGroup
      config={{
        ...config,
        containerClassName: "border-bottom border-secondary",
        inputClassName: "bg-transparent text-light",
      }}
    />
  ),
  InputGroup2: ({ config }) => (
    <Default.InputGroup
      config={{
        ...config,
        containerClassName: "",
        inputClassName: "bg-light text-dark",
      }}
    />
  ),
};

const Button = {
  Text: ({ config }) => (
    <Default.Button
      config={{
        ...config,
        className: `text-light py-0 ${config.className || " "}`,
      }}
    />
  ),
  BrightBlue: ({ config }) => (
    <Default.Button
      config={{
        ...config,
        className: `bg-blue-1 text-light ${config.className || " "}`,
      }}
    />
  ),
  LightBlue: ({ config }) => (
    <Default.Button
      config={{
        ...config,
        className: `bg-blue-2 text-light ${config.className || " "}`,
      }}
    />
  ),
};

export { Button, Form };
