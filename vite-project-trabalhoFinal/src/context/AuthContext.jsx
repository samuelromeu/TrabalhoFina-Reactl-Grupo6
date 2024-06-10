import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const login = (email, senha) => {
    if (email === "dev@serratec.com" && senha === "1234") {
      setUsuario({ email });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUsuario(null);
    console.log("Deslogado com sucesso.");
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
