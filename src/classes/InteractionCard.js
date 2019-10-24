import uuid from 'uuid'

export default class InteractionCard {
    constructor(key=0, from='', to='', description='', isEmpty=true) {

        this.key = uuid();
        this.from = from;
        this.to = to;
        this.description = description;
        this.isEmpty=isEmpty;
        this.cardType = 'InteractionCards';
    }

    // Reset all of the data off the card, can also assign new values
    reset( from='', to='', description='', isEmpty=true) {
        //key=this.key

        //this.key = key;
        this.from = from;
        this.to = to;
        this.description = description;
        this.isEmpty=isEmpty;
    }

    copy(card) {
        this.from = card.from;
        this.to = card.to;
        this.description = card.description;
        this.isEmpty = card.isEmpty;
    }
}