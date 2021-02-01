import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/config";

const UsuarioContext = React.createContext();

// Hook para obtener el usuario
const useUsuario = () => {
  return useContext(UsuarioContext);
};

// Proveedor de contexto del usuario que permite acceder al mismo desde cualquier lugar con su hook
const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (usuario) => {
      if (usuario) {
        try {
          setCargando(true);
          const usuarioDoc = await db.collection("usuarios").doc(usuario.uid).get();
          const usuarioData = usuarioDoc.data();
          setUsuario(usuarioData);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        setUsuario(null);
      }
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UsuarioContext.Provider value={usuario}>
      {!cargando && children}
    </UsuarioContext.Provider>
  );
};

export { useUsuario, UsuarioProvider };
