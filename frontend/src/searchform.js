class SearchForm {
    constructor(){
    this.formEventListener();
    this.renderSearchForm();
 }    
 renderSearchForm = () => {
    const form = document.getElementById("search-form")
    form.innerHTML = `
        <form action="" id="search-form" method="get">
            <label for="search"></label><br>
            <input type="text" name="search" placeholder="Search by Name"></input>
            <input type="submit" value="Submit"></input>    
        </form>
        `
        }
        formEventListener = () => {
            const form = document.getElementById("search-form")
            form.addEventListener("submit", (e) => this.searchEvent(e));
        }
        searchEvent = (e) => {
            e.preventDefault();
            const formName = {search: e.target.search.value}
            console.log(formName)
            api.searchCharacterByName(formName)
          
        }
    }
  
