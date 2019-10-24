import React, { Component } from 'react'
import QuestionCard from '../cards/selectCards/Question_Card'
import LETCard from '../cards/selectCards/LET_Card'
import InteractionCard from '../cards/selectCards/Interaction_Card'

export default class CardSelect extends Component {
    render() {
        const cardRowType = this.props.cardRowType;

        let rCard;

        rCard = this.props.cards.map(card => {
            //console.log(card.cardType)
            // console.log(cardRowType)

            if (card.isEmpty){
                return (<div key={card.key}/>)
            } else {
                //Decide which type of card to render
                switch(card.cardType){
                    case 'QuestionCards':
                        return (<QuestionCard key={card.key} card={card} addCard={this.props.addCard} />)
                    case 'LETCards':
                        return (<LETCard key={card.key} card={card} addCard={this.props.addCard} />)
                    case 'InteractionCards':
                        return (<InteractionCard key={card.key} card={card} addCard={this.props.addCard} />)
                }
            }
        });

        if (!this.props.isOpen) {
            return null;
        }

        return (<div style={cardSelectorStyle} className='CardRow'>
                    <button style={customCardStyle}>Make a Custom Card (WIP)</button>
                    <button style={closeButtonStyle} onClick={this.props.onClose}>X</button>
                    <div style={titleStyle}>
                        Select a Card
                    </div>
                    <div>
                        {rCard} 
                    </div>
                </div>)
    }
}

const titleStyle = {
    color: 'white'
}

const cardSelectorStyle = {
    boxSizing: 'border-box',
    position: 'absolute',
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    opacity: '0.9',
    top: '0',
    left: '0', 
    bottom: '0', 
    right: '0',
    margin: 'auto',
    padding: '10px',
    width: '800px',
    height: '600px',
    borderRadius: '10px',
    //display: 'flex',    // Note to self, google what 'flex' actually does
    overflow: 'auto',
    float: 'left',
}

const customCardStyle = {
    marginBottom: '15px',
    padding: '3px',
    margin: '5px',
    cursor: 'pointer',
    borderRadius: '10px',
    //border: '2px',
    //width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
}

const closeButtonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
}