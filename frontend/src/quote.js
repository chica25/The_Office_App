
class Quote {

    static container = document.querySelector('.quote-container')
    // static charImage = document.getElementsByClassName("card");
    constructor(content, id) {
        this.content = content
        this.character_id = id
        this.render()
    }

    static getQuotes(character_id) {
        api.fetchQuotes(character_id).then((data) =>
            data.forEach((quote) => new Quote(quote.quote, quote.character_id))
        );
    }

    render() {
        // debugger
        // const charImage = document.getElementsByClassName("card");
        const quoteList = document.createElement("div");
        // refactor this.name, this.image_url, this.likes
        // const {name, image_url, likes} = this.character;
        quoteList.className = "quoteList"
        this.quoteList = quoteList;
        this.quoteList.innerHTML = `
        <h3>${this.content}</h3>
        `
        //this.constructor.container.append(quoteList);
        //console.log(this.constructor.charImage);
        // console.log(this.quoteList);

        // this.constructor.charImage.appendChild(quoteList);
        this.constructor.container.append(quoteList);
    }

}

