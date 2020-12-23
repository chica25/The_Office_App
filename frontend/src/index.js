
const api = new ApiService("http://localhost:3000/api/v1")

document.addEventListener("DOMContentLoaded", () => {
   
    this.sortEventListener();
    
    api.fetchImages();

})

    //find the sort button using querySelector
    // attach a click event listener to the button
    //("click", () => Character.fetchSortandRenderCharacters())

    sortEventListener = () => {
        const sortButton = document.querySelector(".sort-button");
        const sortArray = []
        sortButton.addEventListener("click", () => {
            // console.log(sortButton)
            //Character.fetchSortandRenderCharacters()
            api.fetchSort.then((data) => console.log(data))
        })
    }

    // api.fetchQuotes();

