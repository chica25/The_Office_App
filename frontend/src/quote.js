
class Quote {
    constructor(content, id) {
        this.content = content
        this.characterId = id
        this.render()
    }

    static getQuotes(characterId) {
        const div = document.querySelector(`#character-${characterId}`)
        div.innerHTML = ''
        api.fetchQuotes(characterId).then((data) =>
            data.forEach((quote) => new Quote(quote.quote, characterId))
        );
    }

    render() {
        const div = document.querySelector(`#character-${this.characterId}`)
        div.innerHTML += `<h3>${this.content}</h3>`
    }

}
    
