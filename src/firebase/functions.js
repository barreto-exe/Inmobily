import { auth, db, storage } from "./config";

// Inicio de sesión con correo y contraseña
export const iniciarSesion = (correo, password) => {
  const promesa = auth.signInWithEmailAndPassword(correo, password);
  return promesa;
};

// Cerrar Sesión
export const cerrarSesion = () => {
  auth.signOut();
};

// Subir archivo al storage
export const subirArchivo = async (archivo, ruta) => {
  const archivoRef = storage.ref().child(ruta);

  // TODO: Tener cuidado con los posibles errores y colocar metadata
  await archivoRef.put(archivo);
  const url = await archivoRef.getDownloadURL();
  return url;
};

// Registro de usuarios
export const registrarUsuario = async (usuario, foto) => {
  const respuesta = await auth.createUserWithEmailAndPassword(
    usuario.correo,
    usuario.password
  );

  const uid = respuesta.user.uid;

  let url = "";
  if (foto) {
    url = await subirArchivo(foto, `imagenes/${uid}.png`);
  }
  // Copia los datos del usuario
  const datos = { ...usuario, fotoURL: url };
  delete datos.password;
  delete datos.confirmacion;

  await db.collection("usuarios").doc(uid).set(datos);

};

export const actualizarUsuario = async (usuario, nuevosDatos) => {
  const promise = db
    .collection(`usuarios`) // TODO: Cambiar después a la ruta real
    .doc(usuario.uid)
    .update(nuevosDatos);
  return promise;
};

export const obtenerAgencias = async () => {
  const agencias = await db.collection("agencias").get();
  return agencias.docs.map((agencia) => agencia.data());
}

// Registro de agencia
export const registrarAgencia = async (agencia, foto) => {

  const agencias = await obtenerAgencias();

  if (agencias.some((a) => a.rif === agencia.rif)) {
    throw "agencia-repetida";
  }

  let url = "";
  if (foto) {
    url = await subirArchivo(foto, `imagenes/${agencia.rif}.png`);
  }

  agencia.fotoURL = url;

  await db.collection("agencias").doc(agencia.rif).set(agencia);
};

// Consultar asesores de una agencia
export const obtenerAsesores = async (agenciaId) => {
  const promesa = await db
    .collection("agencias")
    .doc(agenciaId)
    .collection("usuarios")
    .where("tipo", "==", "asesor")
    .get();
  return promesa.docs;
};

// Consultar gerentes de una agencia
export const obtenerGerentes = async (agenciaId) => {
  const promesa = await db
    .collection("agencias")
    .doc(agenciaId)
    .collection("usuarios")
    .where("tipo", "==", "gerente")
    .get();
  return promesa.docs;
};

// TODO: Para las siguientes cuatro funciones considerar (de ser relevante) si están culminadas las operaciones

// Consultar las operaciones asignadas a un asesor
// Recibe al asesor y la función que se ejecutará luego de obtener las operaciones
export const obtenerOperacionesAsignadas = (asesor, func) => {
  return db
    .collection(`agencias/${asesor.agenciaID}/operaciones`)
    .where("asesores", "array-contains", asesor.uid)
    .onSnapshot((snapshot) => {
      const operaciones = snapshot.docs.map((doc) => {
        const operacion = doc.data();
        operacion.id = doc.id;
        return operacion;
      });
      func(operaciones);
    });
};

// TODO: De ser posible, considerar luego la simplificación de las siguientes tres funciones
// Para que reciban además el tipo de operación, si es que no difieren en nada más

// Consultar las operaciones de captación de una agencia
// Recibe el id de la agencia y la función que se ejecutará luego de obtener las operaciones
export const obtenerOperacionesCaptacion = (agenciaID, func) => {
  return db
    .collection(`agencias/${agenciaID}/operaciones`)
    .where("tipo", "==", "captacion")
    .onSnapshot((snapshot) => {
      const operaciones = snapshot.docs.map((doc) => {
        const operacion = doc.data();
        operacion.id = doc.id;
        return operacion;
      });
      func(operaciones);
    });
};

// Consultar las operaciones de Cierre de una agencia
// Recibe el id de la agencia y la función que se ejecutará luego de obtener las operaciones
export const obtenerOperacionesCierre = (agenciaID, func) => {
  return db
    .collection(`agencias/${agenciaID}/operaciones`)
    .where("tipo", "==", "Cierre")
    .onSnapshot((snapshot) => {
      const operaciones = snapshot.docs.map((doc) => {
        const operacion = doc.data();
        operacion.id = doc.id;
        return operacion;
      });
      func(operaciones);
    });
};

// Consultar las operaciones unificadas de una agencia
// Recibe el id de la agencia y la función que se ejecutará luego de obtener las operaciones
export const obtenerOperacionesUnificadas = (agenciaID, func) => {
  return db
    .collection(`agencias/${agenciaID}/operaciones`)
    .where("tipo", "==", "unificada")
    .onSnapshot((snapshot) => {
      const operaciones = snapshot.docs.map((doc) => {
        const operacion = doc.data();
        operacion.id = doc.id;
        return operacion;
      });
      func(operaciones);
    });
};
