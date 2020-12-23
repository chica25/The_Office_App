
const api = new ApiService("http://localhost:3000/api/v1")

document.addEventListener("DOMContentLoaded", () => {
   
  
    
    api.fetchImages();

    this.sortEventListener();

})

sortEventListener = () => {
    const sortButton = document.querySelector(".sort-button");
    sortButton.addEventListener("click", () => (Character.fetchSortandRenderCharacters()))
}


