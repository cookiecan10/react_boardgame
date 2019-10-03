import React, { Component } from 'react'
import ActivityCard from './cards/ActivityCard'
import EnhancedCard from './cards/EnhancedCard'
import InteractionCard from './cards/InteractionCard'

export default class CardRow extends Component {
    render() {
        switch(this.props.cardType){
            
            case 'activity':
                return this.props.cards.map((card) => (
                    <ActivityCard key={card.id} card={card}/>));

            case 'enhanced':
                return this.props.cards.map((card) => (
                    <EnhancedCard key={card.id} card={card}/>));

            case 'interaction':
                return this.props.cards.map((card) => (
                    <InteractionCard key={card.id} card={card}/>));

            default:
                return <div></div>
        }
    }
}
