
const speed = checkSpeed(75);
console.log(speed);

function checkSpeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed <= speedLimit)
        return 'speed limit is okay';

    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);

        if (points >= 12)
            console.log('License suspended');
        else
            console.log('points:', points);

        return 'speed limit exceeded';


    }


}