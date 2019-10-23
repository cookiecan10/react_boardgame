
export default class QuestionCard {
    constructor(key=0, title='', content=[], code='', description='', isEmpty=true) {

        this.key = key;
        this.title = title;
        this.content = content;
        this.code = code;
        this.description = description;
        this.isEmpty=isEmpty;
        this.cardType = 'QuestionCards';
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