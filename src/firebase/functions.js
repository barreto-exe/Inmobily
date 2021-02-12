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

  await archivoRef.put(archivo);
  const url = await archivoRef.getDownloadURL();
  return url;
};

// Registro de usuarios
export const registrarUsuario = async (usuario, foto) => {
  // Verifica que exista la agencia
  const agencia = await db.collection("agencias").doc(usuario.rif).get();

  if (!agencia.exists) {
    throw "rif-invalido";
  }

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
  const datos = { ...usuario, uid, fotoURL: url, agenciaID: usuario.rif };
  delete datos.rif;
  delete datos.password;
  delete datos.confirmacion;

  const usuarios = await db
    .collection("agencias")
    .doc(usuario.rif)
    .collection("usuarios")
    .get();

  // Si es el superusuaro
  if (!usuarios.docs.length) {
    datos.tipo = "superusuario";
  } else {
    datos.tipo = "asesor";
  }

  await db
    .collection("agencias")
    .doc(usuario.rif)
    .collection("usuarios")
    .doc(uid)
    .set(datos);
};

export const actualizarUsuario = async (usuario, nuevosDatos, foto) => {
  if (foto) {
    const url = await subirArchivo(foto, `imagenes/${usuario.uid}.png`);
    nuevosDatos.fotoURL = url;
  }

  const promise = db
    .collection("agencias")
    .doc(usuario.agenciaID)
    .collection("usuarios")
    .doc(usuario.uid)
    .update(nuevosDatos);
  return promise;
};

export const obtenerAgencias = async () => {
  const agencias = await db.collection("agencias").get();
  return agencias.docs.map((agencia) => agencia.data());
};

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
export const obtenerAsesores = (agenciaID, func) => {
  return db
    .collection("agencias")
    .doc(agenciaID)
    .collection("usuarios")
    .where("tipo", "==", "asesor")
    .onSnapshot((snapshot) => {
      const asesores = snapshot.docs.map((doc) => {
        const asesor = doc.data();
        return asesor;
      });
      func(asesores);
    });
};

// Consultar gerentes de una agencia
export const obtenerGerentes = (agenciaID, func) => {
  return db
    .collection("agencias")
    .doc(agenciaID)
    .collection("usuarios")
    .where("tipo", "in", ["gerente", "superusuario"])
    .onSnapshot((snapshot) => {
      const gerentes = snapshot.docs.map((doc) => {
        const gerente = doc.data();
        return gerente;
      });
      func(gerentes);
    });
};

// Consultar clientes de una agencia
export const obtenerClientes = (agenciaID, func) => {
  return db
    .collection("agencias")
    .doc(agenciaID)
    .collection("clientes")
    .onSnapshot((snapshot) => {
      const clientes = snapshot.docs.map((doc) => {
        const cliente = doc.data();
        cliente.id = doc.id;
        return cliente;
      });
      func(clientes);
    });
};

export const crearOperacion = async (asesor, operacion) => {
  await db
    .collection(`agencias/${asesor.agenciaID}/operaciones`)
    .add(operacion);
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
    .where("tipo", "==", "cierre")
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
