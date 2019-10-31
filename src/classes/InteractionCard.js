import uuid from 'uuid'

export default class InteractionCard {
    constructor(key=null, from='', to='', description='', id=null, isEmpty=true) {

        if (key === null){
            this.key = uuid();
        } else {
            this.key = key;
        }
        this.from = from;
        this.to = to;
        this.description = description;
        this.isEmpty=isEmpty;
        this.cardType = 'InteractionCards';
        this._id = id;
    }

    // Reset all of the data off the card, can also assign new values
    reset( from='', to='', description='', id=null, isEmpty=true) {
        //key=this.key

        //this.key = key;
        this.from = from;
        this.to = to;
        this.description = description;
        this.isEmpty=isEmpty;
        this._id = id;
    }

    // Copy all of the values of another card
    copy(card) {
        this.from = card.from;
        this.to = card.to;
        this.description = card.description;
        this._id = card._id;
        this.isEmpty = card.isEmpty;
    }

    // Get the data neccessary for storing stuff in the database
    getDBinfo() {
        let obj = {
            from: this.from,
            to: this.to,
            description: this.description,
            cardType: this.cardType,
            _id: this._id,
        }
        return obj
    }
}