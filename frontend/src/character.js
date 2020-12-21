class Character {
    static container = document.querySelector(".character-container")
    constructor(character) {
        this.name = character.name;
        this.image_url = character.image_url;
        this.likes = character.likes;
        this.id = character.id;
        this.render();
        this.attachClickListener();
        this.getQuoteListener();
    }

    static createCharacters(data) {
        data.forEach(character => new Character(character))
    }
    render() {
        const card = document.createElement("div")
        // refactor this.name, this.image_url, this.likes
        // const {name, image_url, likes} = this.character;
        card.className = "card"
        this.card = card;
        this.card.innerHTML = `
        <h2>${this.name}</h2>
        <img src="${this.image_url}" />
        <p>${this.likes} Likes</p>
        <div>
        <button class="likes-btn">Likes</button><br>
        <button class="quotes-bttn">Quotes</button>
        </div>
        `
        this.constructor.container.append(card);
    }

    updateCharacterLikesHTML = (num) => {
        this.card.children[2].innerHTML = `${num} Likes`;
    };

    attachClickListener = () => {
        this.card.addEventListener("click", (event) => {
            // console.log(this);
            const id = this.id
            if (event.target.className === "likes-btn") {
                // api.updateCharacterLikes(id).then((character) 
                api.updateCharacterLikes(id).then((character) => this.updateCharacterLikesHTML(character.likes));
            }

        });

    }
    getQuoteListener = () => {
        this.card.addEventListener("click", (event) => {
            const characterId = this.id
            if (event.target.className === "quotes-bttn") {
                Quote.getQuotes(characterId, this.card)
            }


        });

    }
}
// Create a search form
// search function by character name
// create a new function
// use the filter function to iterate the character names
// character.name
