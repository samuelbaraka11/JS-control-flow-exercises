const first = [{ id: 1 }];
const second = [4, 5, 6];

const combined2 = [...first,'sammy' ,...second, 'baraka'];
const combined = first.concat(second);

first[0].id=10;

const slice = combined.slice();

console.log(combined);
console.log(slice);
console.log(combined2);