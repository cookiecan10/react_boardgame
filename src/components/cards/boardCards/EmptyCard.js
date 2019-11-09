import React, { Component } from 'react'
import TemplateCard from './Template_Card'

// function log(e) {
//     e.preventempty();
//     console.log("THIS IS AN EMPTY CARD!!!")
// }

export default class Card extends TemplateCard {
    render() {
        const { key, cardType } = this.props.card;
        const cardRowType = this.props.cardRowType;

        var style;
        switch(cardType){
            case 'InteractionCards':
                style = {...this.allCardStyle, ...emptyCardStyle, ...interactionCardStyle};
                break;
            case 'LETCards':
                style = {...this.allCardStyle, ...emptyCardStyle, ...LETCardStyle};
                break;
            case 'QuestionCards':
                style = {...this.allCardStyle, ...emptyCardStyle, ...questionCardStyle};
                break;
            empty:
                style = emptyCardStyle;
                break;
        }

        return (
            <div style={style} className='Card' onClick = {this.props.addCard.bind(this, key, cardRowType)}>
                <div>
                    +
                </div>
            </div>
        )
    }
}

var emptyCardStyle = {
    backgroundColor: '#000000',
    color: 'white',
    margin: '7px',
    padding: '0px 4px',
    opacity: '0.6',
    fontSize:'100px',
    textAlign: 'center',
    userSelect: 'none',
    cursor: 'pointer',
    boxShadow: '0px',
}

var interactionCardStyle = {
    backgroundColor: '#8888ff',
}

var LETCardStyle = {
    backgroundColor: '#ff8888',
}

var questionCardStyle = {
    backgroundColor: '#ffff88',
}