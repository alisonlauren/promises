function timer() {
return new Promise((resolve, reject) => {
    const randNum = Math.floor(Math.random() * 10000);
    setTimeout(() => {
    resolve(randNum)
    }, randNum)
})  
}

const tortoise = timer();
const hare = timer();

console.log('Starting Race!')
Promise.all([tortoise, hare])
.then(results => {
    const [tortoiseResult, hareResult] = results;
    // Display the winner (or determine if it's a tie)
    if (tortoiseResult > hareResult) {
    console.log('Tortoise Wins')
    } else if (hareResult > tortoiseResult) {
    console.log('Hare Wins')
    } else if (hareResult === tortoiseResult) {
    console.log('DRAW')
    }
    console.log(`Tortoise: ${tortoiseResult * 0.001} seconds`);
    console.log(`Hare: ${hareResult * 0.001} seconds`);
})
