import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import { Button } from "./Component";
import { createState } from "./helper";

const Home = () => {
  return (
    <div className="text-center" style={{ paddingTop: "120px" }}>
      <Link to="/">
        <Button.Text
          config={{
            inner: (
              <>
                <div>
                  <img src={Logo} style={{ width: "250px" }} alt="logo"></img>
                </div>
                <div className="fs-1 fw-bold">Kalendar</div>
              </>
            ),
          }}
        />
      </Link>
      <div className="pt-5">
        <Link to="/login">
          <Button.BrightBlue
            config={{
              className: "fw-bold",
              inner: "LOG IN",
              width: "200px",
            }}
          />
        </Link>
      </div>

      <div className="pt-2">
        <Link to="/register">
          <Button.LightBlue
            config={{
              className: "fw-bold",
              inner: "REGISTER",
              width: "200px",
            }}
          />
        </Link>
      </div>
      {/*<div className="bg-gray-1 p-3 mx-auto mt-3" style={{ maxWidth: "600px" }}>
            <div className="fs-4 fw-bold">Create Your Account</div>
            
              <div className="pt-3">
                <Form.InputGroup2
                  config={{
                    width: "350px",
                    icon: "fas fa-user-alt",
                    type: "text",
                    placeholder: "Username",
                    value: username.val,
                    onChange: (v) => {
                      username.val = v;
                    },
                  }}
                />
              </div>
              <div className="pt-3">
                <Form.InputGroup2
                  config={{
                    width: "350px",
                    icon: "fas fa-envelope-open",
                    type: "email",
                    placeholder: "Email",
                    value: email.val,
                    onChange: (v) => {
                      email.val = v;
                    },
                  }}
                />
              </div>
              <div className="pt-3">
                <Form.InputGroup2
                  config={{
                    width: "350px",
                    icon: "fas fa-lock",
                    type: "password",
                    placeholder: "Password",
                    value: password.val,
                    onChange: (v) => {
                      password.val = v;
                    },
                  }}
                />
              </div>
              <div className="pt-3">
                <Form.InputGroup2
                  config={{
                    width: "350px",
                    icon: "fas fa-unlock-alt",
                    type: "password",
                    placeholder: "Verifying Password",
                    value: password2.val,
                    onChange: (v) => {
                      password2.val = v;
                    },
                  }}
                />
              </div>
    
              <div className="pt-5">
                <Button.BrightBlue
                  config={{
                    className: "fw-bold",
                    inner: "SIGN UP",
                    width: "200px",
                  }}
                />
                </div>
          
          </div>*/}
    </div>
  );
};

export default Home;
