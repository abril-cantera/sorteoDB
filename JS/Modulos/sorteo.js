const d = document;

d.addEventListener("DOMContentLoaded", () => {
  sorteoDos('sorteo-dos', 'agregar-jugador', 'ganador-btn-dos', 'lista-jugadores');
});


function sorteoDos(input, agregar, ganador, jugadores) {
  const $input = document.getElementById(input),
    $agregar = d.getElementById(agregar),
    $ganador = d.getElementById(ganador),
    $jugadores = d.getElementById(jugadores);
  let jugadoresArray = [];

  const agregarJugadores = () => {
    const inputValue = $input.value;

    if (inputValue === '' || inputValue.length === 0) {
      alert('No has ingresado participante');
    } else {
      jugadoresArray.push(inputValue);
      $jugadores.insertAdjacentHTML("beforeend", ` <li>${inputValue}</li> `);
      $input.value = '';
    }

  };
  const ganadorSorteo = () => {
    $input.focus();

    const random = Math.floor(Math.random() * jugadoresArray.length)
    const jugadorGanador = jugadoresArray[random];

    jugadoresArray = [];

    setTimeout(() => {
      $jugadores.innerHTML = "";
    }, 4000);

    const UserGandor = jugadorGanador;
    const modal = d.getElementById('modal');
    const winner = d.getElementById('winner');
    function modalFunction() {
      if (UserGandor) {
        postData(UserGandor);
        winner.innerHTML = `El ganador fue: ${jugadorGanador} `
        modal.classList.remove('active');
        setTimeout(() => {
          modal.classList.add('active');
        }, 4000);
      }
    }


    const contador = d.getElementById('contador')
    const num = d.getElementById('numero');
    let numero = 3;
    const timer = setInterval(() => {
      if (!!UserGandor && !!numero) {
        contador.classList.remove('active');
        console.log(numero);
        num.innerHTML = `0${numero}`;
        numero--;
      } else if (!!UserGandor && numero == 0) {
        contador.classList.add('active');
        clearInterval(timer);
        modalFunction(UserGandor);
      }
    }, 1000);

  };

  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      agregarJugadores()
    }
  })
  $agregar.addEventListener('click', () => {
    agregarJugadores()
  });

  $ganador.addEventListener('click', () => {
    if (jugadoresArray.length === 0) {
      alert('No has ingresado participantes');
    } else {
      ganadorSorteo();
    }
  });
};

const btnn = d.getElementById('apii')
btnn.addEventListener('click', posttData)

async function posttData() {
  const api = 'http://3.133.152.247:5000/api/v1/winner'
  const response = await fetch(api)
  const data = await response.json();
  console.log(data);

  console.log('GET');
}
