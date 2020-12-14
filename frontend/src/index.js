// console.log("testing...")

// test that we can get data from the backend
// const BACKEND_URL = 'localhost:3000';
// fetch(`${BACKEND_URL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));
const api = new ApiService("http://localhost:3000/api/v1")

document.addEventListener("DOMContentLoaded", () => {
    // debugger;
    api.fetchImages();



}) 

