// fetch code goes here

class ApiService {
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    fetchImages = () => {
        const url = new URL(this.baseUrl + "/characters") 
        fetch(url).then(res => res.json()).then(data => Character.createCharacters(data))
        
        }
    fetchQuotes = (id) => fetch(`${this.baseUrl}/characters/${id}/quotes`).then(res => res.json());
    }

    // Character Patch - update likes

    //updateCharacterLikes = () => fetch(`${this.baseURL}/characters`).then

    // list of quotes
   
    // /characters/:character_id/quotes
// update character likes
// udpateLikes = ()

