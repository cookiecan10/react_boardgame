
export default class LETCard {
    constructor(key=0, title='', enhancements=[], code='', analytics=[], isEmpty=true) {

        this.key = key;
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
}