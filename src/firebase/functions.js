import { auth, db } from "./config";

// Inicio de sesión con correo y contraseña
export const iniciarSesion = (correo, password) => {
  const promesa = auth.signInWithEmailAndPassword(correo, password);
  return promesa;
};

// Cerrar Sesión
export const cerrarSesion = () => {
  auth.signOut();
}

// Registro de usuarios
export const registrarUsuario = async (usuario) => {
  const respuesta = await auth.createUserWithEmailAndPassword(
    usuario.correo,
    usuario.password
  );

  const uid = respuesta.user.uid;

  delete usuario.password;
  delete usuario.confirmacion;

  const promesa = db.collection("usuarios").doc(uid).set(usuario);
  return promesa;
};

// Registro de agencia
export const registrarAgencia = () => {
  const promesa = db.collection("agencias").add(agencia);
  return promesa;
}