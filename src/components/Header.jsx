import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function Header() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header className="flex justify-between p-4 bg-white items-center">
      <Link to="">
        <h1 className="text-2xl font-bold">Todo List App</h1>
      </Link>
      <ul className="flex gap-4">
        {ctx.user ? (
          <>
            <li className="hover:cursor-pointer">
              <Link to="">Home</Link>
            </li>
            <li
              onClick={() => {
                ctx.setUser(false);
                localStorage.removeItem("token");
                navigate("login");
              }}
              className="hover:cursor-pointer"
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li className="hover:cursor-pointer">
              <Link to="login">Login</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to="register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
