class Character {
    static container = document.querySelector('.character-col')
    constructor(character) {
        this.character = character
        this.render()
    }
   
    static renderImages(data) {
        data.forEach(character => new Character(character))
    }
    render(){
        const card = document.createElement("div")
        card.className = "card"
        this.card = card
        this.card.innerHTML = `
        ${this.character.name}
        <img src="${this.character.image_url}">
        <button class="button">Like Me!</button>
        `
        
        // Here is where you want to code the button event listener 
        // Hint: you have to code it with card passed in.
        this.constructor.container.append(card)

    }
   

}
