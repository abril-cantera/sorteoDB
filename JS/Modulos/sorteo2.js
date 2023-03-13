const d = document;


export default function sorteodos(input, agregar, ganador, jugadores) {
  const $input = d.getElementById(input),
    $agregar = d.getElementById(agregar),
    $ganador = d.getElementById(ganador),
    $jugadores = d.getElementById(jugadores);

  let jugadoresArray = [];

  const agregarJugadores = () => {
    const inputValue = $input.value;
    if (inputValue === "" || inputValue.length === 0) {
      swal("No has ingresado participante");
    } else {
      jugadoresArray.push(inputValue);

      $jugadores.insertAdjacentHTML("beforeend", `<li>${inputValue}</li>`);

      $input.value = "";
    }
  };


  //
  const ganadorSorteo = () => {
    $input.focus();
    const random = Math.floor(Math.random() * jugadoresArray.length);
    let jugadorGanador = jugadoresArray[random];
    jugadoresArray = [];
    setTimeout(() => {
      $jugadores.innerHTML = [];
    }, 2000);
    swal(`El ganador es ${jugadorGanador}`);
    pushWinner(jugadorGanador)
  };

  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      agregarJugadores()
    }
  })

  $agregar.addEventListener("click", () => {
    agregarJugadores();
  });

  $ganador.addEventListener("click", () => {
    if (jugadoresArray.length === 0) {
      swal("No has ingresado participantes");
    } else {
      ganadorSorteo();
    }
  });

  //
  const api = 'http://3.133.152.247:5000/winner'
  async function pushWinner(name) {
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
      })
    })
    const data = await res.json()
    console.log(data)
  }
}
