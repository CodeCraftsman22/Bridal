import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();
    let loginPayload = {
      userName: userName,
      password: password,
    };

    axios
      .post("http://localhost:8083/login", loginPayload)
      .then((res) => {
        if (res.data.status === true) {
          nav("/home");
        }
      })
      .catch((e) => {
        console.log(e);
      }, []);
  };

  return (
    <>
      <div className="login">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvcjeKd9U3wzzEWIqxPigqFp-gGp4aKNDFHdPiO9cbM172qxg&s"
          alt=""
        />
        <main>
          <h1>LOGIN</h1>
          <form onSubmit={loginSubmit}>
            <aside>
              <span>
                <div>
                  <i className="fa-solid fa-user"></i>
                </div>
                <input
                  type="text"
                  placeholder="UserName or Email"
                  name="userName"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </span>
            </aside>
            <aside>
              <span>
                <div>
                  <i className="fa-solid fa-lock"></i>
                </div>
                <input
                  type="Password"
                  placeholder="Password"
                  className="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </span>
            </aside>
            <div className="additional-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <section>
              <button type="submit">SIGN IN</button>
            </section>
          </form>
          <h2>Or Login Using? <a href="./register" style={{ color: 'rgb(59, 218, 159)' }}>SignUp</a></h2>
          <footer>
            <div>
              <span>
                <a href="https://www.facebook.com/bridalmakeupinhosur/photos/?_rdr" style={{ height: "100%", width: "100%" }}>
                  <i className="fa-brands fa-facebook fa-2xl" style={{ color: "#ededed" }}></i>
                </a>
              </span>
              <span>
                <a href="https://www.justdial.com/Salem/Naturallook-Bridal-Studio-Salem-Bazaar/0427PX427-X427-230508114132-U5M4_BZDET" style={{ height: "100%", width: "100%" }}>
                  <i className="fa-brands fa-google fa-xl" style={{ color: "white" }}></i>
                </a>
              </span>
              <span>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2Fnaturallookhsr" style={{ height: "100%", width: "100%" }}>
                  <i className="fa-brands fa-twitter fa-xl" style={{ color: "white" }}></i>
                </a>
              </span>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Login;
