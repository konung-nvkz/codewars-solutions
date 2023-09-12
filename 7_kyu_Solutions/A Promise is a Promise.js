/*A Promise is a Promise
Create a resolved javascript Promise that will return 'Hello World!'.
*/

//with sime syntax sugar
async function promiseHelloWorld() {
    return 'Hello World!';
}
console.log(promiseHelloWorld());

//simply with Promise
const promiseHelloWorld = () => Promise.resolve('Hello World!');
console.log(promiseHelloWorld());


//arrow function
const promiseHelloWorld = async () => 'Hello World!';
console.log(promiseHelloWorld());

//old style (usual function syntax)
function promiseHelloWorld() {
    return new Promise((resolve, reject) => {
        return resolve('Hello World!')
        });
}
console.log(promiseHelloWorld());