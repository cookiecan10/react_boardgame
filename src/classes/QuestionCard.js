import uuid from 'uuid'

export default class QuestionCard {
    constructor(key=null, title='', content=[], code='', description='', id=null, isEmpty=true) {

        if (key === null){
            this.key = uuid();
        } else {
            this.key = key;
        }
        this.title = title;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
        this.cardType = 'QuestionCards';
        this._id = id;
    }

    // Reset all of the data off the card, can also assign new values
    reset(title='', content=[], code='', description='', id=null, isEmpty=true) {
        //key=this.key

        //this.key = key;
        this.title = title;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
        this._id = id;
    }

    // Copy all of the values of another card
    copy(card){
        this.title = card.title;
        this.content = card.content;
        this.code = card.code;
        this.description = card.description;
        this._id = card._id;
        this.isEmpty = card.isEmpty;
    }

    // Get the data neccessary for storing stuff in the database
    getDBinfo() {
        let obj = {
            title: this.title,
            content: this.content,
            code: this.code,
            description: this.description,
            cardType: this.cardType,
            _id: this._id,
        }
        return obj
    }
}