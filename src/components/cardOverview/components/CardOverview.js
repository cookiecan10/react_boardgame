import React, { Component } from 'react'
import ActivityCard from '../../cards/ActivityCard'
import EnhancedCard from '../../cards/EnhancedCard'
import InteractionCard from '../../cards/InteractionCard'
import EmptyCard from '../../cards/EmptyCard'

export default class CardRow extends Component {
    render() {

        let rCard;

        switch(this.props.cardType){
            case 'activity':
                
                rCard = this.props.cards.map(card => {
                    
                    if (card.isEmpty){
                        return (<EmptyCard key={card.key} card={card}/>)
                    } else {
                        return (<ActivityCard key={card.key} card={card}/>)
                    }
                });

                return rCard

            case 'enhanced':
                console.log('activitycardtje geviewd')
                rCard = this.props.cards.map(card => {

                    console.log(card.cardType)
                    if (card.isEmpty){
                        return (<EmptyCard key={card.key} card={card}/>)
                    } else {
                        return (<EnhancedCard key={card.key} card={card}/>)
                    }
                });

                return rCard

            case 'interaction':

                rCard = this.props.cards.map(card => {
                    if (card.isEmpty){
                        return (<EmptyCard key={card.key} card={card}/>)
                    } else {
                        return (<InteractionCard key={card.key} card={card}/>)
                    }
                });

                return rCard

            default:
                return <div>This should never appear, if it does appear there's something broken and this should be reported</div>
        }
    }
}
