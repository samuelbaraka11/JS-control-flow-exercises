let details = {
    FirstName: 'Samuel',
    LastName: 'Baraka',
    Email: 'samuelbaraka@mail.com',
    Street: 'Nairobi',
    ZipCode: '00200',
    Phone: '0211987634'
};

function showDetails(details) {
    for (let key in details)
        console.log(key, details[key]);

}

showDetails(details);