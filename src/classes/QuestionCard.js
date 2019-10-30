import uuid from 'uuid'

export default class QuestionCard {
    constructor(key=null, title='', content=[], code='', description='', isEmpty=true) {

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
    }

    // Reset all of the data off the card, can also assign new values
    reset(title='', content=[], code='', description='', isEmpty=true) {
        //key=this.key

        //this.key = key;
        this.title = title;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
    }

    // Copy constructor
    copy(card){
        this.title = card.title;
        this.content = card.content;
        this.code = card.code;
        this.description = card.description;
        this.isEmpty = card.isEmpty;
    }
}