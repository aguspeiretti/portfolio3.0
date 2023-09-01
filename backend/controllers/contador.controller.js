import Contador from "../models/Contador.js";

export const incrementarContador = async (req, res) => {
  try {
    // Busca el registro del contador en la base de datos
    let contador = await Contador.findOne();

    if (!contador) {
      // Si no existe, crea un nuevo registro con valor 1
      contador = new Contador({ valor: 1 });
    } else {
      // Si existe, incrementa su valor en 1
      contador.valor++;
    }

    // Guarda el registro actualizado en la base de datos
    await contador.save();

    // Envía el valor del contador como respuesta
    res.json({ contador: contador.valor });
  } catch (error) {
    console.error("Error al obtener o actualizar el contador", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
