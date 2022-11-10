console.log(summation(50));

function summation(limit) {
    let summation = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 8 === 0)

            summation += i;
    return summation;

}