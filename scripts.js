//stopwatch
//create a simple stopwatch app and shows stopped timei

//create two new functions and passing through to our function
new Promise((resolve, reject) => {
    const randNum = Math.floor(Math.random() * 500);
    selfTimeout(() => {
        resolve(randNum)
    }, randNum)
})
    .then((number) => {
        const number = document.createElement('h1')
        title.textContent = number
        document.body.appendChild(title)
    })