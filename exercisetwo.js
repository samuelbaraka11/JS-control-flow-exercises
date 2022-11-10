let number = max(3, 8);
console.log(number);

function max(a, b) {


    if (a > b) {
        console.log("The larger number is: " + a)
    } else if (a == b)
        console.log("The two numbers are equal");
    else
        console.log("Thelarger number is:" + b);
}

//alternative2

// if(a>b) {
//     return a;
//     return b;


//alternative3

// (a > b) ? a : b