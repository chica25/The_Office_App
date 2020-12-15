class Quote {
   
    static container = document.querySelector('.quote-container')
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
        const quoteList = document.createElement("div")
        // refactor this.name, this.image_url, this.likes
        // const {name, image_url, likes} = this.character;
        quoteList.className = "quoteList"
        this.quoteList = quoteList;
        this.quoteList.innerHTML = `
        <h3>${this.content}</h3>
        `
        this.constructor.container.append(quoteList);
    }

}

// practice 
// class Item {
//     static all = []

//     constructor({name, description, price, id}){
//         this.name = name;
//         this.description = description;
//         this.price = price;
//         this.id = id;

//         this.element = document.createElement('div');
//         this.element.id = `item-${this.id}`
//         this.itemlist = document.getElementById('item-list')

//         itemlist.allpush(this)
//     }
//     attachToDOM(){
//         this.itemlist.append(this.element)
//     }
//     fullRender(){
//         this.element.innerHTML = `
//         <li>
//             $<span class="price">${this.price}</span>
//              <strong class="name">${this.name}</strong>:
//              <span class="description>${this.description}></span>
//         </li>
//         <button class="delete" data-id="${this.id}">Delete</button>
//          <button class="delete" data-id="${this.id}">Delete</button>

//         `
//     }
// }