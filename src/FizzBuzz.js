
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
    return "" + n;
}

export {ConvertirFizzBuzz, GenerarCadenaFizzBuzz};