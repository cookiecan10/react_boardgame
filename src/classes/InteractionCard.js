
export default class InteractionCard {
    constructor(key=0, content=[], code='', description='', isEmpty=true) {

        this.key = key;
        //this.from = from;
        //this.to = to;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
        this.cardType = 'InteractionCards';
    }

    // Reset all of the data off the card, can also assign new values
    reset(key=this.key, content=[], code='', description='', isEmpty=true) {
        this.key = key;
        //this.title = title;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
    }
}