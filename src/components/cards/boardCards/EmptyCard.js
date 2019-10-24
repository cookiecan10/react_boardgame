import React, { Component } from 'react'

// function log(e) {
//     e.preventDefault();
//     console.log("THIS IS AN EMPTY CARD!!!")
// }

class Card extends Component {
    render() {
        const { key, cardType } = this.props.card;
        const cardRowType = this.props.cardRowType;

        var style;
        switch('Change to "cardType"'){
            case 'InteractionCards':
                style = interactionCardStyle;
                break;
            case 'LETCards':
                style = LETCardStyle;
                break;
            case 'QuestionCards':
                style = questionCardStyle;
                break;
            default:
                style = defaultCardStyle;
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

var defaultCardStyle = {
    position: 'relative',
    float: 'left',
    backgroundColor: '#000000',
    color: 'white',
    // width: '20%',
    height: '250px',
    margin: '7px',
    padding: '0px 4px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '4px 4px',
    borderRadius: '5px',
    opacity: '0.7',
    fontSize:'100px',
    textAlign: 'center',
    userSelect: 'none',
    cursor: 'pointer'
}

var interactionCardStyle = {
    position: 'relative',
    float: 'left',
    backgroundColor: '#8888ff',
    color: 'white',
    // width: '20%',
    height: '250px',
    margin: '7px',
    padding: '0px 4px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '4px 4px',
    borderRadius: '5px',
    opacity: '0.7',
    fontSize:'100px',
    textAlign: 'center',
    userSelect: 'none',
    cursor: 'pointer'
}

var LETCardStyle = {
    position: 'relative',
    float: 'left',
    backgroundColor: '#ff8888',
    color: 'white',
    // width: '20%',
    height: '250px',
    margin: '7px',
    padding: '0px 4px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '4px 4px',
    borderRadius: '5px',
    opacity: '0.7',
    fontSize:'100px',
    textAlign: 'center',
    userSelect: 'none',
    cursor: 'pointer'
}

var questionCardStyle = {
    position: 'relative',
    float: 'left',
    backgroundColor: '#ffff88',
    color: 'white',
    // width: '20%',
    height: '250px',
    margin: '7px',
    padding: '0px 4px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '4px 4px',
    borderRadius: '5px',
    opacity: '0.7',
    fontSize:'100px',
    textAlign: 'center',
    userSelect: 'none',
    cursor: 'pointer'
}

export default Card