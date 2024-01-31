
// console.log('loading....1');

// setTimeout(() => {
//     console.log('salom');
// },500)

// setTimeout(() => {
//     console.log('salom1');
//     console.log('loading....3');
// },0)
// console.log('loading....2');

// console.log('loading....2');
// function fetchData(sardorbek) {
//     setTimeout(() => {
//         sardorbek();
//         console.log("Data fetched!");
//         console.log('loading....3');

//     }, 2000);
// }
// console.log('loading....1');
// function processData() {
//     console.log("Data processed!");
//     console.log('loading....4');

// }
// fetchData(processData);
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;
            if (success) {
                console.log("Data fetched!");
                resolve("Data");
            } else {
                reject("Error fetching data");
            }
        }, 2000);
    });
}

fetchData()
    .then(data => console.log(`Processing ${data}`))
    .catch(error => console.error(error));








