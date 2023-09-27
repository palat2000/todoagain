import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function LoginPage() {
  const [input, setInput] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:5555/auth/login", {
        username: input.username,
        password: input.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        ctx.setUser(true);
        navigate("/");
      })
      .catch((err) => {
        window.alert("login failed");
        setInvalid(true);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  if (isLoading) {
    return <span className="loading loading-dots loading-lg mx-auto"></span>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-white rounded-md p-4"
    >
      <div>
        <label className="block mb-1 font-semibold" htmlFor="username">
          Username
        </label>
        <input
          className="bg-gray-100 w-full outline-none rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-400"
          type="text"
          id="username"
          value={input.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className="bg-gray-100 w-full outline-none rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-400"
          type="password"
          id="password"
          value={input.password}
          onChange={handleChange}
        />
      </div>
      {invalid && (
        <span className="text-red-600 text-sm">
          Invalid username or password
        </span>
      )}
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
}

export default LoginPage;
