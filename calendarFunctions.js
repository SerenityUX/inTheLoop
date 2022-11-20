export function getMonths(year) {
    if(year % 4 != 0) {
        var numDaysInFeburary = 28
    } else {
        var numDaysInFeburary = 29  
    }
    return [
        {
            name: "Janurary",
            numDays: 31,
            number: 1,
        },
        {
            name: "Feburary",
            numDays: numDaysInFeburary,
            number: 2,
        },
        {
            name: "March",
            numDays: 31,
            number: 3,

        },
        {
            name: "April",
            numDays: 30,
            number: 4,

        },
        {
            name: "May",
            numDays: 31,
            number: 5,

        },
        {
            name: "June",
            numDays: 30,
            number: 6,
        },
        {
            name: "July",
            numDays: 31,
            number: 7,

        },        
        {
            name: "August",
            numDays: 31,
            number: 8,

        },
        {
            name: "September",
            numDays: 30,
            number: 9,

        },
        {
            name: "October",
            numDays: 31,
            number: 10,

        },
        {
            name: "November",
            numDays: 30,
            number: 11,

        },
        {
            name: "December",
            numDays: 31,
            number: 12,

        }
    ] 
}
