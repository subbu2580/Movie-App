import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ name: "", password: "" });
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const LoginHandeler = (event) => {
    event.preventDefault();

    const user = data.some(
      (userData) =>
        userData.name === input.name && userData.password === input.password
    );
    console.log(user)
    if (user === true) {
      navigate('/home')
    }
    else {
      alert('check username and password')
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div style={{ backgroundColor: "lightblue", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={LoginHandeler} style={{ width: "90%", maxWidth: "400px", textAlign: "center", padding: "20px", border: "2px solid #3498db", borderRadius: "5px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#3498db", marginBottom: "20px" }}>Login Page</h1>
        <div>
          <label style={{ color: "#2ecc71", display: "block", marginBottom: "5px", textAlign: "left" }}>Username:</label>
          <input
            type="text"
            value={input.name}
            onChange={handleInputChange}
            name="name"
            style={{ width: "100%", margin: "10px 0", padding: "8px", borderRadius: "5px", border: "1px solid #2ecc71", backgroundColor: "#d5f5e3", color: "#555" }}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label style={{ color: "#e74c3c", display: "block", marginBottom: "5px", textAlign: "left" }}>Password:</label>
          <input
            type="password"
            value={input.password}
            onChange={handleInputChange}
            name="password"
            style={{ width: "100%", margin: "10px 0", padding: "8px", borderRadius: "5px", border: "1px solid #e74c3c", backgroundColor: "#f5b7b1", color: "#555" }}
            placeholder="Enter your password"
          />
        </div>
        <input type="submit" style={{ margin: "15px 0", width: "100%", padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#9b59b6", color: "#fff", cursor: "pointer" }} value="Login" />
      </form>
    </div>




  )
};

export default Login;
