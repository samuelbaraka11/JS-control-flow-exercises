//if...else if...else
let hour = 14;

if (hour >= 6 && hour < 12) {

    console.log('Good Morning Africa');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon to you');
}
else {
    console.log('Goodevening');
}


//switch case
let role;

switch (role) {
    case 'guest':
        console.log('This is a guest user');
        break;

    case 'remote':
        console.log('This is a remote user');
        break;

    case 'admin':
        console.log('This user contains admin righs');
        break;
    default:
        console.log('Unknown user');
}


// if...else if...else
if (role === 'guest') console.log('Guest'); else if (role === 'remote')
    console.log('Remote user'); else console.log('Unknown user');


//for loop-. In this case to display something a number of times.
// for (let i = 1; i <= 5; i++) {
//     console.log('Volkswagen is a lifestyle', i);
// }

//for loop to display odd numbers
for (let i = 1; i <= 10; i++)
    if (i % 2 !== 0) {
        console.log(i);
    }

//for-in loop
const person = {
    name: 'Samuel',
    age: 22
};
for (let key in person)
    console.log(key, person[key]);

const cars = ['GTI', 'Golf R', 'GTD'];

for (let index in cars)
    console.log(index, cars[index]);
