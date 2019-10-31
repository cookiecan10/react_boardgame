import React from 'react';
import QuestionCard from '../../cards/boardCards/Question_Card'
import LETCard from '../../cards/boardCards/LET_Card'
import InteractionCard from '../../cards/boardCards/Interaction_Card'

class CardListRow extends React.Component{
    render(){
        let rCard;

        rCard = this.props.cards.map(card => {   
            //Decide which type of card to render
        switch(card.cardType){
            case 'QuestionCards':
                return (<QuestionCard key={card.key} card={card}/>)
            case 'LETCards':
                return (<LETCard key={card.key} card={card}/>)
            case 'InteractionCards':
                return (<InteractionCard key={card.key} card={card}/>)
            default:
                return (<div />)
            }
        });
        return (<div style={cardRowStyle} className='CardRow'> {rCard} </div>)
    }
}
const cardRowStyle = {
    position: "relative",
    float: "left",
    width: "100%",
    height: "90%",
    border: "3px solid rgba(49, 49, 49, 0.856)",
    overflow: "hidden",
    textAlign: 'center',
}
export default CardListRow;