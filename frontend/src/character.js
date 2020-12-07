class Character {
    static container = document.querySelector('.character-col')
    constructor(character = null) {
        if (character) {
            this.render(character)
        } else {
            this.getImages()
        }

        // this.attachEventListener()
    }
    getImages() {
        api.fetchImages()
    }
    static renderImages(data) {
        data.forEach(character => new Character(character))
    }
    render(character){
        const card = document.createElement("div")
        card.className = "card"
        this.card = card
        this.card.innerHTML = `
        ${character.name}
        <img src="${character.image_url}">
        <button class="button">Like Me!</button>
        `
        buttonEventListener()
        // Here is where you want to code the button event listener 
        // Hint: you have to code it with card passed in.
        this.constructor.container.append(card)

    }
    buttonEventListner

}
