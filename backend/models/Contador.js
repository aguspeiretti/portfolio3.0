import mongoose from "mongoose";

const contadorSchema = new mongoose.Schema({
  valor: {
    type: Number,
    default: 0,
  },
});

const Contador = mongoose.model("Contador", contadorSchema);

export default Contador;
