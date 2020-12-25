class Character {
    static container = document.querySelector(".character-container")
    static sortArray = []
        constructor(character) {
            this.name = character.name;
            this.image_url = character.image_url;
            this.likes = character.likes;
            this.id = character.id;
            this.character = character;
            // debugger
            this.constructor.sortArray.push(character);
            this.render();
            this.attachClickListener();
            this.getQuoteListener();

        }

    static createCharacters(data) {
        data.forEach(character => new Character(character))
    }
        render() {
            const card = document.createElement("div")
            card.className = "card"
            this.card = card;
            this.renderInnerHTML(this.character);
            this.constructor.container.append(card);
        }

        renderInnerHTML = (character) => {
            this.card.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.image_url}" />
            <p>${character.likes} Likes</p>
            <div>
            <button class="likes-btn">Likes</button><br>
            <button class="quotes-bttn">Quotes</button>
            </div>
            <div class="quotes-container" id="character-${character.id}"></div>
            `
        }


    static getQuotes(characterId) {
        const div = document.querySelector(`#character-${characterId}`)
        div.innerHTML = ''
        api.fetchQuotes(characterId).then((data) =>
            data.forEach((quote) => new Quote(quote.quote, characterId))
        )}
    
        updateCharacterLikesHTML = (num) => {
            this.card.children[2].innerHTML = `${num} Likes`;
        }

        attachClickListener = () => {
            this.card.addEventListener("click", (event) => {
                const id = this.id
                if (event.target.className === "likes-btn") {
                    api.updateCharacterLikes(id).then((character) => this.updateCharacterLikesHTML(character.likes));
                }

            });

        }
    
        getQuoteListener = () => {
            this.card.addEventListener("click", (event) => {
                if (event.target.className === "quotes-bttn") {
                    Quote.getQuotes(this.id)
                }
        })
    }

  
    
    static fetchSortandRenderCharacters(){
        this.container.innerHTML = "";
        const sortedArray = this.sortArray.sort((a,b) => {
            if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
        }) 
    
        this.sortArray = []
        sortedArray.forEach( character => {new Character(character)})

    }
    
}
   
  

   
  
         

        