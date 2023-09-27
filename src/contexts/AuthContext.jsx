import { useEffect } from "react";
import { useState, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(
    localStorage.getItem("token") ? true : false
  );
  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get("http://localhost:5555/todo", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, todos, setTodos }}>
      {children}
    </AuthContext.Provider>
  );
}
