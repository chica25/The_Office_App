// fetch code goes here

class ApiService {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    // fetchImages makes a fetch request to the base URL
    // then it'll be parsed with a json response

    fetchImages = () => {
        const url = new URL(this.baseUrl + "/characters") 
        fetch(url).then(res => res.json()).then(data => Character.createCharacters(data))
        // console.log(fetchImages);
    }
    updateCharacterLikes = (id) => {
       return fetch(`${this.baseUrl}/characters/${id}`, { method: "PATCH" }).then(res => res.json());
    }


    fetchQuotes = (character_id) => fetch(`${this.baseUrl}/characters/${character_id}/quotes`).then(res => res.json());
        // console.log(fetchQuotes)
}
  

