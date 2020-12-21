
class Quote {

    constructor(content, id, characterCard) {
        this.content = content
        this.characterId = id
        this.characterCard = characterCard
        this.render()
    }

    static getQuotes(characterId, characterCard) {
     
        api.fetchQuotes(characterId).then((data) =>
            data.forEach((quote) => new Quote(quote.quote, quote.characterId, characterCard))
                
        );
    }

    render() {
        this.characterCard.innerHTML += `<h3>${this.content}</h3>`
    }
}


