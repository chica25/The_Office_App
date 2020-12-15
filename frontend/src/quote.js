class Quote {
    static container = document.getElementsByTagName('quote-col')
        constructor(quote) {
        this.quote = quote
        this.character_id = character_id
        this.render()
    }

    static getQuotes(id) {
        api.fetchQuotes(id).then((data) =>
            data.forEach((quote) => new Quote(quote))
        );
    }

    render() {
        const quoteList = document.createElement("div")
        // refactor this.name, this.image_url, this.likes
        // const {name, image_url, likes} = this.character;
        quoteList.className = "quoteList"
        this.quoteList = quoteList;
        this.quoteList.innerHTML = `
        <h3>${this.quote}</h3>
        `
        this.constructor.container.append(quoteList);
    }

}


