
class Quote {

  
    // static charImage = document.getElementsByClassName("card");
    constructor(content, id, characterCard) {
        this.content = content
        this.character_id = id
        this.characterCard = characterCard
        this.render()
    }

    static getQuotes(character_id, characterCard) {
     
        api.fetchQuotes(character_id).then((data) =>
            data.forEach((quote) => new Quote(quote.quote, quote.character_id, characterCard))
        );
    }

    render() {
        this.characterCard.innerHTML += `<h3>${this.content}</h3>`

    }
}
//     let i = 0;
// const count = setInterval((quoteList) => {
//         console.log('hello');
//     i++;
//     if(i === 5) {
//         clearinterval(quoteList);
//     }

//     }, 1000);

