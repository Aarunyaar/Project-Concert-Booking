import { useState } from "react";
import axios from "axios";

function Login({ setToken }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios.post("http://127.0.0.1:8000/api/token/", {
      username,
      password
    })
    .then(res => {
      localStorage.setItem("token", res.data.access);
      setToken(res.data.access);
    })
    .catch(() => alert("Invalid credentials"));
  };

  return (
    <div className="auth-card">

      <h3 className="auth-title">🎵 Login</h3>

      <input
        className="form-control mb-3"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button className="btn btn-primary w-100 auth-btn" onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;