class Character {
    constructor() {
        this.getImages()
        // this.attachEventListener()
    }
    getImages() {
        api.fetchImages()
    }
    static renderImages(data) {
        data.forEach(character => render(character))
    }
    render(character){
        
    }
}
