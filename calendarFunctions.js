export function getMonths(year) {
    if(year % 4 != 0) {
        var numDaysInFeburary = 28
    } else {
        var numDaysInFeburary = 29  
    }
    return [
        {
            name: "Janurary",
            numDays: 31
        },
        {
            name: "Feburary",
            numDays: numDaysInFeburary,
        },
        {
            name: "March",
            numDays: 31  
        },
        {
            name: "April",
            numDays: 30
        },
        {
            name: "May",
            numDays: 31
        },
        {
            name: "June",
            numDays: 30
        },
        {
            name: "August",
            numDays: 31
        },
        {
            name: "September",
            numDays: 30
        },
        {
            name: "October",
            numDays: 31
        },
        {
            name: "November",
            numDays: 30
        },
        {
            name: "December",
            numDays: 31
        }
    ] 
}
