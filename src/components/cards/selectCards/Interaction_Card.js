import React, { Component } from 'react'

// function log(e) {
//     e.preventDefault();
//     console.log("SELECTED Interaction card")
// }

class InteractionCard extends Component {
    render() {
        const { key, from, to, description, cardType} = this.props.card;
        return (
            <div style={cardStyle} onClick={this.props.addCard.bind(this, key, cardType)} className='Card'>

                <div name='title'>
                    <div style={topStyle} name='InteractionTop'>learning enhancing technology</div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold', margin: '10px 0px 0px 0px', textAlign: 'center' }}>Interaction</div>
                    <div style={{ fontSize: '15px', fontWeight: 'normal', margin: '5px 0px 5px', textAlign: 'center' }}>{from} 🠊 {to} </div>
                </div>
                <div style={contentStyle} name='content'>
                    <div style={{ fontSize: '15px' }}>{description}</div>
                </div>

                <div name='description'>
                    <div style={bottomStyle}>What do we want to know?
                    </div>
                </div>

            </div>
        )
    }
}

const cardStyle = {
    position: 'relative',
    float: 'left',
    fontSize: '1vh',
    backgroundColor: '#8888ff',
    color: 'black',
    width: '25%',
    height: '250px',
    margin: '7px',
    padding: '0px 4px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '4px 4px',
    borderRadius: '5px',
    userSelect: 'none',
    cursor: 'pointer'
}

const contentStyle = {
    backgroundColor: '#ffffff'
}
const topStyle = {
    backgroundColor: '#ff8888',
    textAlign: 'center',
    fontSize: '15px'
}
const bottomStyle = {
    backgroundColor: '#ffff88',
    textAlign: 'center',
    fontSize: '15px'
}

export default InteractionCard