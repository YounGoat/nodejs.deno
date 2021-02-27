import * as datetime from '../../denoland/deno_std/datetime/mod.ts'

console.log(datetime.parse("03-01-2019", "dd-mm-yyyy")) // output : new Date(2019, 1, 3)
console.log(datetime.parse("2019-01-03", "yyyy-mm-dd")) // output : new Date(2019, 1, 3)

console.log(datetime.parse("01-03-2019 16:34", "mm-dd-yyyy hh:mm")) // output : new Date(2019, 1, 3, 16, 34)
console.log(datetime.parse("16:34 01-03-2019", "hh:mm mm-dd-yyyy")) // output : new Date(2019, 1, 3, 16, 34)
