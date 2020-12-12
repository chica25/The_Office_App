class Character {
    static container = document.querySelector('.character-col')
    constructor(character) {
        this.name = character.name;
        this.image_url = character.image_url;
        this.likes = character.likes;
        this.render();
        this.attachClickListener();
    }
   
    static createCharacters(data) {
        data.forEach(character => new Character(character))
    }
    render(){
        const card = document.createElement("div")
        // refactor this.name, this.image_url, this.likes
        // const {name, image_url, likes} = this.character;
        card.className = "card"
        this.card = card;
        this.card.innerHTML = `
        <h3>${this.name}</h3>
        <img src="${this.image_url}" />
        <p>${this.likes}</p>
        <button class="likes-btn">Likes</button>
        <button class="quotes-btn">Quotes</button>
        `
        this.constructor.container.append(card);
    }
        
        // const likeButton = card.getElementById('likes-btn')
 

    attachClickListener = () => {
       this.card.addEventListener("click", () => {
            // console.log(this);
            let id = this.card.dataset.id
           if (event.target.className === 'likes-btn'){
                api.updateCharacterLikes(id).then((character) => this.updateCharacterLikesHTML(character));
                // console.log(this.character.id)
            //  api.fetchQuotes(this.character_id).then(quotes => console.log(quotes))
                //use the character id to make a fetch request for their quotes
            }
        });

        // updateCharacterLikesHTMl = (num) => {
        //     this.card.innerHTML = `${num} Likes`;
          updateCharacterLikesHTML = (character) => {
              this.character = character
              this.card.innerHTML = this.render()
        };
    }

}

