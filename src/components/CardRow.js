import React, { Component } from 'react'
import ActivityCard from './cards/ActivityCard'
import EnhancedCard from './cards/EnhancedCard'
import InteractionCard from './cards/InteractionCard'
import EmptyCard from './cards/EmptyCard'

export default class CardRow extends Component {
    render() {

        let rCard;

        rCard = this.props.cards.map(card => {
            console.log(card.cardType)

            if (card.isEmpty){
                return (<EmptyCard key={card.key} card={card} addCard={this.props.addCard}/>)
            } else {
                switch(card.cardType){
                    case 'activityCards':
                        return (<ActivityCard key={card.key} card={card} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                    case 'enhancedCards':
                        return (<EnhancedCard key={card.key} card={card} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                    case 'interactionCards':
                        return (<InteractionCard key={card.key} card={card} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
                }
            }
        });
        return rCard;

        // switch(this.props.cardType){

        //     case 'activity':
                
        //         rCard = this.props.cards.map(card => {
        //             if (card.isEmpty){
        //                 return (<EmptyCard key={card.key} card={card} addCard={this.props.addCard}/>)
        //             } else {
        //                 return (<ActivityCard key={card.key} card={card} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
        //             }
        //         });

        //         return rCard

        //     case 'enhanced':

        //         rCard = this.props.cards.map(card => {
        //             if (card.isEmpty){
        //                 return (<EmptyCard key={card.key} card={card} moveLeft={this.props.moveLeft} addCard={this.props.addCard}/>)
        //             } else {
        //                 return (<EnhancedCard key={card.key} card={card} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
        //             }
        //         });

        //         return rCard

        //     case 'interaction':

        //         rCard = this.props.cards.map(card => {
        //             if (card.isEmpty){
        //                 return (<EmptyCard key={card.key} card={card} moveLeft={this.props.moveLeft} addCard={this.props.addCard}/>)
        //             } else {
        //                 return (<InteractionCard key={card.key} card={card} moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} delCard={this.props.delCard}/>)
        //             }
        //         });

        //         return rCard

        //     default:
        //         return <div>This should never appear, if it does appear there's something broken and this should be reported</div>
        // }
    }
}
