let datetime = require('../../datetime')

console.log(datetime.parseDate("03-01-2019", "dd-mm-yyyy")) // output : new Date(2019, 1, 3)
console.log(datetime.parseDate("2019-01-03", "yyyy-mm-dd")) // output : new Date(2019, 1, 3)

console.log(datetime.parseDateTime("01-03-2019 16:34", "mm-dd-yyyy hh:mm")) // output : new Date(2019, 1, 3, 16, 34)
console.log(datetime.parseDateTime("16:34 01-03-2019", "hh:mm mm-dd-yyyy")) // output : new Date(2019, 1, 3, 16, 34)
