import { ConvertirFizzBuzz, GenerarCadenaFizzBuzz } from "./FizzBuzz";

const input = prompt("Ingresa un número para FizzBuzz:");
const numero = parseInt(input, 10);
const resultado = GenerarCadenaFizzBuzz(numero);

document.body.innerHTML = `<h3>Resultado FizzBuzz:</h3><p>${resultado}</p>`;