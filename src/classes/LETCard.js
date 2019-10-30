import uuid from 'uuid'

export default class LETCard {
    constructor(key=null, title='', enhancements=[], code='', analytics=[], isEmpty=true) {

        if (key === null){
            this.key = uuid();
        } else {
            this.key = key;
        }
        this.title = title;
        this.enhancements = enhancements;
        this.code = code;
        this.analytics = analytics;
        this.isEmpty=isEmpty;
        this.cardType = 'LETCards';
    }

    // Reset all of the data off the card, can also assign new values
    reset( title='', enhancements=[], code='', analytics=[], isEmpty=true) {
        //key=this.key

        //this.key = key;

        this.title = title;
        this.enhancements = enhancements;
        this.code = code;
        this.analytics = analytics;
        this.isEmpty=isEmpty;
    }

    copy(card){
        this.title = card.title;
        this.enhancements = card.enhancements;
        this.code = card.code;
        this.analytics = card.analytics;
        this.isEmpty = card.isEmpty;
    }
}