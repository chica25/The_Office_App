class SearchForm {
    constructor(){
    this.renderSearchForm();
 }    
 renderSearchForm = () => {
    const form = document.getElementById("search-form")
    console.log(form)
    form.innerHTML = `
        <form action="GET">
            <label for="search"></label><br>
            <input type="text" name="search" placeholder="Search by Name"></input>
            <input type="submit" value="Submit"></input>    
        </form>
        `
        }
    }
