import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex justify-between p-4 bg-white items-center">
      <Link to="">
        <h1 className="text-2xl font-bold">Todo List App</h1>
      </Link>
      <ul className="flex gap-4">
        <li className="hover:cursor-pointer">
          <Link to="">Home</Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to="login">Login</Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link>Logout</Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to="register">Register</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
