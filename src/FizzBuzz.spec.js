import ConvertirFizzBuzz from "./FizzBuzz";

describe("ConvertirFizzBuzz", () => {
    it ("debería devolver el mismo numero '1' si no es multiplo de 3 y 5", () => {
        expect(ConvertirFizzBuzz(1)).toEqual("1");
    });
});

