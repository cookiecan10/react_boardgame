import React, { Component } from 'react'

// function log(e) {
//     e.preventDefault();
//     console.log("THIS IS AN EMPTY CARD!!!")
// }

class Card extends Component {
    render() {
        const { key } = this.props.card;
        const cardRowType = this.props.cardRowType;
        return (
            <div style={cardStyle} className='Card' onClick = {this.props.addCard.bind(this, key, cardRowType)}>
                <div>
                    +
                </div>
            </div>
        )
    }
}

const cardStyle = {
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

export default Card