let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan

*/

let arr=largeCountries.length
console.log(arr)

for (let i = 0; i<(arr-1);i++){
    console.log(" -> "+largeCountries[i])
}