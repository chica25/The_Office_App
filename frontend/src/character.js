class Character {
    static container = document.querySelector(".character-container")
    static staticArray = []
        constructor(character) {
            this.name = character.name;
            this.image_url = character.image_url;
            this.likes = character.likes;
            this.id = character.id;
            this.render();
            this.attachClickListener();
            this.getQuoteListener();
            this.constructor.staticArray.push(character);
        }

    static createCharacters(data) {
        data.forEach(character => new Character(character))
    }
        render() {
            const card = document.createElement("div")
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
            <div class="quotes-container" id="character-${this.id}"></div>
            `
            this.constructor.container.append(card);
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
        this.constructor.sortArray.sort((a, b) => a - b);
        
    }

}



    
   
    // fetch(url).then(res => res.json()).then(data => Character.createCharacters(data))



    // static fetchSortandRenderCharacters(){
        //fetch an array of all characters
        //sort the array
        //clear the existing character container
        // iterate over the sorted array, instantiating new Character objects
//     }


   
  
         

        