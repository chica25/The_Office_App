// fetch code goes here

class ApiService {
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    fetchImages = () => {
        const url = new URL(this.baseUrl + "/characters") 
        fetch(url).then(res => res.json()).then(data => Character.renderImages(data))
        
        }
    }
    // list of quotes
    fetchQuotes = () => fetch(`${this.baseURL}/quotes`).then(res => res.json());
    
// update character likes
// udpateLikes = ()

