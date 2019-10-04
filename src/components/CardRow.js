import React, { Component } from 'react'
import ActivityCard from './cards/ActivityCard'
import EnhancedCard from './cards/EnhancedCard'
import InteractionCard from './cards/InteractionCard'
import EmptyCard from './cards/EmptyCard'

export default class CardRow extends Component {
    render() {

        let rCard;

        switch(this.props.cardType){

            case 'activity':
                
                rCard = this.props.cards.map(card => {
                    if (card.isEmpty){
                        return (<EmptyCard />)
                    } else {
                        return (<ActivityCard key={card.id} card={card}/>)
                    }
                });

                return rCard

            case 'enhanced':

                rCard = this.props.cards.map(card => {
                    if (card.isEmpty){
                        return (<EmptyCard />)
                    } else {
                        return (<EnhancedCard key={card.id} card={card}/>)
                    }
                });

                return rCard

            case 'interaction':

                rCard = this.props.cards.map(card => {
                    if (card.isEmpty){
                        return (<EmptyCard />)
                    } else {
                        return (<InteractionCard key={card.id} card={card}/>)
                    }
                });

                return rCard

            default:
                return <div></div>
        }
    }
}
