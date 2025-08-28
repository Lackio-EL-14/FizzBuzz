import {ConvertirFizzBuzz, GenerarCadenaFizzBuzz} from "./FizzBuzz";

describe("ConvertirFizzBuzz", () => {
    it ("debería devolver el mismo numero '1' si no es multiplo de 3 y 5", () => {
        expect(ConvertirFizzBuzz(1)).toEqual("1");
    });
    it ("debería devolver cualquier numero '2' si no es multiplo de 3 y 5", () => {
        expect(ConvertirFizzBuzz(2)).toEqual("2");
    });
    it ("debería devolver 'Fizz' si es el numero 3", () => {
        expect(ConvertirFizzBuzz(9)).toEqual("Fizz");
    });
    it ("debería devolver 'Fizz' si el numero es multiplo de 3", () => {
        expect(ConvertirFizzBuzz(6)).toEqual("Fizz");
    });
    it ("debería devolver 'Buzz' si el numero es igual a 5", () => {
        expect(ConvertirFizzBuzz(5)).toEqual("Buzz");
    });
    it ("debería devolver 'Buzz' si el numero es multiplo de 5", () => {
        expect(ConvertirFizzBuzz(10)).toEqual("Buzz");
    });
    it ("debería devolver 'FizzBuzz' si el numero es multiplo de 3 y 5", () => {
        expect(ConvertirFizzBuzz(15)).toEqual("FizzBuzz");
    });
    it ("debería devolver 'FizzBuzz' si el numero es multiplo de 3 y 5", () => {
        expect(ConvertirFizzBuzz(90)).toEqual("FizzBuzz");
    });
    it ("deberia devolver la cadena del 1 sin convertir nada de fizz a buzz", () => {
        expect(GenerarCadenaFizzBuzz(1)).toEqual("1");
    });
});

