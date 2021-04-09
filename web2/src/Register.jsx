import { useState } from "react";
import { Button, TextInput } from "./Component";

const RegisterBox = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  return (
    <div className="mx-auto px-2 py-3 text-kl-light bg-gray1" style={{ width: "640px" }}>
      <div className="fs-3 fw-bold">Create Your Account</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log({ username, password, email });
        }}
      >
        <div className="px-5 pt-3">
          {[
            { val: username, setVal: setUsername, type: "text", text: "Username", icon: "fas fa-user" },
            { val: email, setVal: setEmail, type: "text", text: "Email Address", icon: "far fa-envelope" },
            {
              val: password,
              setVal: setPassword,
              type: "password",
              text: "Password",
              icon: "fas fa-lock",
              msg: "The password must be between 6 and 12 charecters",
            },
            {
              val: verifyPassword,
              setVal: setVerifyPassword,
              type: "password",
              text: "Re-type password",
              icon: "fas fa-unlock-alt",
            },
          ].map((v) => (
            <div key={v.text}>
              <div className="row pt-3 m-0">
                <div className="col-2 my-auto">
                  <i className={`${v.icon} fs-2`}></i>
                </div>
                <div className="col ps-0">
                  <TextInput
                    color="light"
                    type={v.type}
                    value={v.val}
                    placeholder={v.text}
                    onChange={(val) => {
                      v.setVal(val);
                    }}
                  />
                </div>
              </div>
              {v.msg ? <div className="pt-1">{v.msg}</div> : <></>}
            </div>
          ))}
        </div>
        <div className="pt-5">
          <Button type="submit" className="w-200px" color="blue4">
            <div className="fs-5 fw-bold">SIGN UP</div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterBox;
