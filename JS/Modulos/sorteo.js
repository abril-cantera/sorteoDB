const d = document;
export default function sorteo(btn, selector) {
  const obtenerGanador = (selector) => {
    const $jugadores = d.querySelectorAll(selector);

    console.log($jugadores);

    const random = Math.floor(Math.random() * $jugadores.length);

    const ganador = $jugadores[random];
    return `El ganador es ${ganador.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const resultado = obtenerGanador(selector);

      console.log(e.target);

      swal(`${resultado}`);
    }
  });
}
