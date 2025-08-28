
function ConvertirFizzBuzz(n){
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n + "";
    }
}

function GenerarCadenaFizzBuzz(n){
    let resultado = "";
    for (let i = 1; i <= (n || 1); i++) {
        if (i > 1) {
            resultado += ",";
        }
        resultado += ConvertirFizzBuzz(i);
    }
    return resultado;
}


export {ConvertirFizzBuzz, GenerarCadenaFizzBuzz};