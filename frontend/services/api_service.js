// fetch code goes here

class ApiService {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    fetchImages = () => {
        const url = new URL(this.baseUrl + "/characters") 
        fetch(url).then(res => res.json()).then(data => Character.createCharacters(data))
    }

    updateCharacterLikes = (id) => {
       return fetch(`${this.baseUrl}/characters/${id}`, { method: "PATCH" }).then(res => res.json());
    }


    fetchQuotes = (characterId) => { 
        return fetch(`${this.baseUrl}/characters/${characterId}/quotes`).then(res => res.json());
    }

    fetchSort = () => {
        const url = new URL(this.baseUrl + "/characters")
        fetch(url).then(res => res.json())
    }

    } 
