import ConvertirFizzBuzz from "./FizzBuzz";

describe("ConvertirFizzBuzz", () => {
    it ("debería devolver el mismo numero '1' si no es multiplo de 3 y 5", () => {
        expect(ConvertirFizzBuzz(1)).toEqual("1");
    });
    it ("debería devolver cualquier numero '2' si no es multiplo de 3 y 5", () => {
        expect(ConvertirFizzBuzz(2)).toEqual("2");
    });
    it ("debería devolver 'Fizz' si es el numero 3", () => {
        expect(ConvertirFizzBuzz(3)).toEqual("Fizz");
    });
});

