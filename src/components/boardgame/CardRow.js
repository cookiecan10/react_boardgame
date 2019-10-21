import React, { Component } from 'react'
import ActivityCard from '../cards/ActivityCard'
import EnhancedCard from '../cards/EnhancedCard'
import InteractionCard from '../cards/InteractionCard'
import EmptyCard from '../cards/EmptyCard'

export default class CardRow extends Component {
    render() {
        const cardRowType = this.props.cardRowType;

        let rCard;

        rCard = this.props.cards.map(card => {
            //console.log(card.cardType)
            console.log(cardRowType)

            if (card.isEmpty){
                return (<EmptyCard key={card.key} card={card} cardRowType={cardRowType} addCard={this.props.addCard}/>)
            } else {
                //Decide which type of card to render
                switch(card.cardType){
                    case 'activityCards':
                        return (<ActivityCard key={card.key} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                    case 'enhancedCards':
                        return (<EnhancedCard key={card.key} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                    case 'interactionCards':
                        return (<InteractionCard key={card.key} card={card} cardRowType={cardRowType} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                }
            }
        });
        return (<div className='CardRow'> {rCard} </div>)
    }
}
