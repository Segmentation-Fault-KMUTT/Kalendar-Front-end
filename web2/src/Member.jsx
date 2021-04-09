import { useState } from "react";
import { Button, TextInput } from "./Component";
import { Main } from "./Home";
import RegisterBox from "./Register";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Main>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
        }}
      >
        <div className="mx-auto pt-3" style={{ width: "400px" }}>
          <div className="pb-1 border-bottom">
            <TextInput
              icon="fas fa-user-alt"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(v) => {
                setUsername(v);
              }}
            />
          </div>
          <div className="mt-3 pb-1 border-bottom">
            <TextInput
              icon="fas fa-lock"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(v) => {
                setPassword(v);
              }}
            />
          </div>
        </div>
        <div className="pt-4">
          <Button>Forgot Password?</Button>
        </div>
        <div className="pt-1">
          <Button className="w-150px" color="blue2">
            LOG IN
          </Button>
        </div>
        <div className="pt-1">
          <Button to="/register" className="w-150px" color="blue3">
            REGISTER
          </Button>
        </div>
      </form>
    </Main>
  );
};

const Register = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <div>
        <Button to="/">
          <span className="fs-5 fw-bold">Kalendar</span>
        </Button>
      </div>
      <div className="pt-3">
        <RegisterBox />
      </div>
    </div>
  );
};

/*const ForgotPassword = () => {

}*/

export { Login, Register };
