import uuid from 'uuid'

export default class LETCard {
    constructor(key=null, title='', enhancements=[], code='', analytics=[], id=null, isEmpty=true) {

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
        this._id = id;
    }

    // Reset all of the data off the card, can also assign new values
    reset( title='', enhancements=[], code='', analytics=[], id=null, isEmpty=true) {
        //key=this.key

        //this.key = key;

        this.title = title;
        this.enhancements = enhancements;
        this.code = code;
        this.analytics = analytics;
        this.isEmpty=isEmpty;
        this._id = id;
    }

    copy(card){
        this.title = card.title;
        this.enhancements = card.enhancements;
        this.code = card.code;
        this.analytics = card.analytics;
        this._id = card._id;
        this.isEmpty = card.isEmpty;
    }

    getDBinfo() {
        let obj = {
            title: this.title,
            enhancements: this.enhancements,
            code: this.code,
            analytics: this.analytics,
            cardType: this.cardType,
            _id: this._id,
        }
        return obj
    }
}