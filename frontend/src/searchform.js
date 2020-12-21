class SearchForm {
    constructor(){
    this.renderSearchForm();
 }    
 renderSearchForm = () => {
    const form = document.getElementById("search-form")
    console.log(form)
    form.innerHTML = `
        <form action="" id="search-form" method="get">
            <label for="search"></label><br>
            <input type="text" name="search" placeholder="Search by Name"></input>
            <input type="submit" value="Submit"></input>    
        </form>
        `
        }
        formEventListener = (request) => {
            const form = document.getElementById("search-form")
            formEventListener("submit", (e) => this.searchEvent(e));
        }
        searchEvent = (e) => {
            e.preventDefault();
            const formName = {name: event.target.search.value}
        }
    }
  
