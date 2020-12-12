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
    
// next step is to Iterate
  
  
    // Character - update likes

    updateCharacterLikes = (id) => {
        fetch(`${this.baseUrl}/characters/${id}`, { method: "PATCH" }).then(res => res.json());
    }
}
// update character likes
// udpateLikes = ()

