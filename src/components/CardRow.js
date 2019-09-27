import React, { Component } from 'react'
import ActivityCard from './cards/ActivityCard'
import EnhancedCard from './cards/EnhancedCard'
import InteractionCard from './cards/InteractionCard'

export default class CardRow extends Component {
    render() {
        if (this.props.cardType==='activity') { 
            return this.props.cards.map((card) => (
                <ActivityCard key={card.id} card={card}/>
            ));
        } else if (this.props.cardType==='enhanced'){
            return this.props.cards.map((card) => (
                <EnhancedCard key={card.id} card={card}/>
            ));
        } else if (this.props.cardType==='interaction'){
            return this.props.cards.map((card) => (
                <InteractionCard key={card.id} card={card}/>
            ));
        }
    }
}
