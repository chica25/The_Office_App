class Character {
    static container = document.querySelector(".character-container")
    static sortAll = []
    static filterArray = []
    constructor(character) {
        this.character = character;
        this.constructor.sortAll.push(character);
        this.constructor.filterArray.push(character);
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

    updateCharacterLikesHTML = (num) => {
        this.card.children[2].innerHTML = `${num} Likes`;
    }

  
    attachClickListener = () => {
        this.card.addEventListener("click", (event) => {
            const id = this.character.id
            
            if (event.target.className === "likes-btn") {
                api.updateCharacterLikes(id).then((character) => this.updateCharacterLikesHTML(character["likes"]));
            }
        });
    }

    getQuoteListener = () => {
        this.card.addEventListener("click", (event) => {
            if (event.target.className === "quotes-bttn") {
                Quote.getQuotes(this.character.id)
            }
        })
    }
    
    static sortCharacters(){
        this.container.innerHTML = "";
        const sortedResult = this.sortAll.sort((a,b) => {
            if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
        }) 
    
        this.sortAll = []
        sortedResult.forEach( character => {new Character(character)})
     }
    static allCharacters() {
        const text = document.querySelector('.text').style.color = 'purple';
        // text.style.color = 'purple';
        text.innerHTML = 'Pam Beesley';
        // debugger
    }
    static characterByLetter() {
        this.container.innerHTML = "";
        const fil = this.filterArray.filter(n => n["name"].startsWith("A"))
        // debugger
        this.filterArray = []
        fil.forEach(cha => {new Character(cha)})
    }

 
}




 
      
    

   


    
   




   
        


