import mathOperations from './math-operations.js';
/* import { multiplicar, obj3 } from './math-operations'; */

console.log(mathOperations);


const btnSumar = document.getElementById('btn-sumar');
const inputNumberOne = document.getElementById('numb-one');
const inputNumberTwo = document.getElementById('numb-two');
const elementRespuesta = document.getElementById('respuesta');

function onClickBtnSumar() {
  const valueNumbOne = parseInt(inputNumberOne.value);
  const valueNumbTwo = parseInt(inputNumberTwo.value);

  console.log(valueNumbOne, valueNumbTwo);

  const sumaTotal = mathOperations.sumar(valueNumbOne, valueNumbTwo);
  elementRespuesta.innerHTML = `<p>Rsultado final : ${sumaTotal} </p>`;
/*   elementRespuesta.classList.add('respuesta'); */
  elementRespuesta.textContent = sumaTotal;
}

btnSumar.addEventListener('click', onClickBtnSumar);

