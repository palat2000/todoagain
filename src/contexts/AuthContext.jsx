import { useState, createContext } from "react";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
