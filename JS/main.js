import sorteo from "./Modulos/sorteo.js";
import sorteodos from "./Modulos/sorteo2.js";

const d = document;

//Esto carga todos los eventos al cargarse la pagina
d.addEventListener("DOMContentLoaded", () => {
  sorteo("#ganador-btn", ".jugador");
  sorteodos(
    "sorteo-dos",
    "agregar-jugador",
    "ganador-btn-dos",
    "lista-jugadores"
  );
});
