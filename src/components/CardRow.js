import React, { Component } from 'react'
import ActivityCard from './cards/ActivityCard'
import { toUnicode } from 'punycode'

export default class CardRow extends Component {
    render() {
        return this.props.cards.map((card) => (
            <ActivityCard key={card.id} card={card}/>
        ));
    }
}
