
class Card {
    constructor(key=0, content=[], code='', description='', isEmpty=true) {
        this.key = key;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
    }

    // Reset all of the data off the card, can also assign new values
    reset(key=this.key, content=[], code='', description='', isEmpty=true) {
        this.key = key;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
    }
}

export default Card;