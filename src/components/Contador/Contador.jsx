import { useEffect, useState } from "react";
import axios from "axios";
import "./contador.scss";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [solicitudRealizada, setSolicitudRealizada] = useState(false);

  useEffect(() => {
    if (!solicitudRealizada) {
      // Realiza una solicitud GET al servidor Express para obtener el contador de visitas y actualizarlo
      axios
        .get("https://zenith-abyssinian-latency.glitch.me/api/contador")
        .then((response) => {
          setContador(response.data.contador);
          setSolicitudRealizada(true); // Marca la solicitud como realizada
        })
        .catch((error) => {
          console.error("Error al obtener el contador de visitas", error);
        });
    }
  }, [solicitudRealizada]);

  return (
    <div className="contadorVisitas">
      <p>Visitante n: {contador}</p>
    </div>
  );
};

export default Contador;
