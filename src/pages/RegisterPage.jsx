import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const schema = Joi.object({
    username: Joi.string().min(4).max(30).required(),
    password: Joi.string().min(6).alphanum().required(),
    confirmPassword: Joi.ref("password"),
  });

  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { value, error } = schema.validate(
      {
        username,
        password,
        confirmPassword,
      },
      { abortEarly: false }
    );
    console.dir(error);
    if (error) {
      const result = error.details.reduce(
        (acc, item) => {
          for (let key in acc) {
            if (key == item.path[0]) {
              acc[key] = item.message;
            }
          }
          return acc;
        },
        { username: "", password: "", confirmPassword: "" }
      );
      return setErr(result);
    }
    setErr({ username: "", password: "", confirmPassword: "" });
    setIsLoading(true);
    axios
      .post("http://localhost:5555/auth/register", {
        username,
        password,
        confirmPassword,
      })
      .then((res) => {
        window.alert("success registration");
        navigate("/login");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <span className="loading loading-dots loading-lg mx-auto"></span>;
  }

  return (
    <form
      className="flex flex-col gap-3 bg-white rounded-md p-4"
      onSubmit={handleSubmitForm}
    >
      <div>
        <label className="block mb-1 font-semibold" htmlFor="username">
          Username
        </label>
        <input
          className={`bg-gray-100 w-full outline-none rounded-md px-3 py-1.5 focus:ring-2 ${
            err.username
              ? "border border-red-600 focus:ring-red-600"
              : " focus:ring-blue-400"
          }`}
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {err.username && (
          <span className="text-red-600 text-xs">{err.username}</span>
        )}
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className={`bg-gray-100 w-full outline-none rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-400 ${
            err.password
              ? "border border-red-600 focus:ring-red-600"
              : " focus:ring-blue-400"
          }`}
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {err.password && (
          <span className="text-red-600 text-xs">{err.password}</span>
        )}
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="confirm-password">
          Confirm password
        </label>
        <input
          className={`bg-gray-100 w-full outline-none rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-400 ${
            err.confirmPassword
              ? "border border-red-600 focus:ring-red-600"
              : " focus:ring-blue-400"
          }`}
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {err.confirmPassword && (
          <span className="text-red-600 text-xs">Password is not ตรงกัน</span>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Sign up
      </button>
    </form>
  );
}

export default RegisterPage;
