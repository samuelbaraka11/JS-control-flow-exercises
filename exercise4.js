//divisible by 3=> Fizz
//Divisible by 5=> Buzz

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number';

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'fizzBuzz';


    if (input % 3 === 0)
        return 'Fizz';


    if (input % 5 === 0)
        return 'Buzz';


    else
        return 'input';


}