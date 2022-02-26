let add = (num1, num2) => num1 + num2;


//console.log(add(2, 2))
//console.log(add(0, 1))


//module.exports = add;

let multiply = (num1, num2) => num1 * num2;

//console.log(multiply(2, 4))

//console.log(multiply(0, 1))



const first = add(4, 4)

//console.log(multiply(first, 2))

let getNumberSign = (num) => {
    if (num > 0) {
     return 'positive';
    } 

    else if (num === 0) {
     return 'zero';
    }

    else if (num < 0) {
      return 'negative';
    }
}

//console.log(getNumberSign(3));
//console.log(getNumberSign(0));
//console.log(getNumberSign(-5));


const validLength = 10;

const isValidLength = (phoneNumber) => {  
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidLength('00'));
console.log(isValidLength('0011223344'));
