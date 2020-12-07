class Character {
    static container = document.querySelector('.character-col')
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
        const card = document.createElement("div")
        card.className = "card"
        this.card = card
        this.renderInnerHTML()
    }
        renderInnerHTML() {
            this.card.innerHTML = `
            <img src="${thi}
            `
        }
}
