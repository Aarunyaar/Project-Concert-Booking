// import { useState } from "react";
// import axios from "axios";

// function Register({ setShowRegister }) {

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const register = () => {

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     axios.post("http://127.0.0.1:8000/register/", {
//       username,
//       email,
//       password,
//       confirm_password: confirmPassword
//     })
//     .then(() => {
//       alert("Registered Successfully 🎉");
//       setShowRegister(false);
//     })
//     .catch(() => alert("Error"));
//   };

//   return (
//     <div className="auth-card">

//       <h3 className="auth-title">🎵 Register</h3>

//       <input className="form-control mb-3" placeholder="Username"
//         onChange={e => setUsername(e.target.value)} />

//       <input className="form-control mb-3" placeholder="Email"
//         onChange={e => setEmail(e.target.value)} />

//       <input type="password" className="form-control mb-3" placeholder="Password"
//         onChange={e => setPassword(e.target.value)} />

//       <input type="password" className="form-control mb-3" placeholder="Confirm Password"
//         onChange={e => setConfirmPassword(e.target.value)} />

//       <button className="btn btn-success w-100 auth-btn" onClick={register}>
//         Register
//       </button>

//     </div>
//   );
// }

// export default Register;


// import { useState } from "react";
// import axios from "axios";

// function Register() {

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const register = () => {

//     // ✅ Frontend validation (important)
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     axios.post("http://127.0.0.1:8000/register/register/", {
//       username: username,
//       email: email,
//       password: password,
//       confirm_password: confirmPassword
//     })
//     .then(res => {
//       console.log(res.data);
//       alert("Registered Successfully ✅");
//     })
//     .catch(err => {
//       console.log(err);

//       if (err.response) {
//         alert(JSON.stringify(err.response.data));
//       } else {
//         alert("Server error");
//       }
//     });
//   };

//   return (
//     <div>
//       <h2>Register</h2>

//       <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
//       <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
//       <input type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />

//       <button onClick={register}>Register</button>
//     </div>
//   );
// }

// export default Register;





import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    axios.post("http://127.0.0.1:8000/register/register/", {
      username,
      email,
      password,
      confirm_password: confirmPassword,
    })
      .then(res => {
        alert("Registered Successfully ✅");
      })
      .catch(err => {
        if (err.response) {
          alert(JSON.stringify(err.response.data));
        } else {
          alert("Server error");
        }
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: 30,
          borderRadius: 10,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          maxWidth: 600,
          width: "100%",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Register</h2>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ flex: "1 1 45%", padding: 10, fontSize: 16, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ flex: "1 1 45%", padding: 10, fontSize: 16, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ flex: "1 1 45%", padding: 10, fontSize: 16, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            style={{ flex: "1 1 45%", padding: 10, fontSize: 16, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>

        <button
          onClick={register}
          style={{
            marginTop: 20,
            width: "100%",
            padding: 12,
            fontSize: 18,
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Register
        </button>

        <p style={{ marginTop: 15, textAlign: "center" }}>
          Already have account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;