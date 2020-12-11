class Character {
    static container = document.querySelector('.character-col')
    constructor(character) {
        this.name = character.name
        this.image_url = character.image_url
        this.likes = character.likes
        this.render()
        this.attachClickListener()
    }
   
    static createCharacters(data) {
        data.forEach(character => new Character(character))
    }
    render(){
        const card = document.createElement("div")
        card.className = "card"
        this.card = card
        this.card.innerHTML = `
        <h3>${this.name}</h3>
        <img src="${this.image_url}">
        <p>${this.likes}</p>
        <button class="like-button">Likes</button>
        <button class="quote-button">Quotes</button>
        `
        // Add event listener
        // Hint: Code it with card passed in
         this.constructor.container.append(card)

        // const likeButton = card.getElementById('likes-btn')
    }

    attachClickListener(){
        this.card.addEventListener("click", (e) => {
            if(e.target.className === 'quote-button'){
               
                console.log(this.character.id)
                api.fetchQuotes(this.character.id).then(quotes => console.log(quotes))
                //use the character id to make a fetch request for their quotes
            }
        })
    }


   

}
