import React, { Component } from 'react'

function log(e) {
    e.preventDefault();
    console.log("you clicked an Interaction Card")
}

class InteractionCard extends Component {
    render() {
        const { key, from, to, description } = this.props.card;
        const cardRowType = this.props.cardRowType;
        return (
            <div style={cardStyle} onClick={log} className='Card'>

                <button style={leftButtonStyle} onClick={this.props.moveLeft.bind(this, key, cardRowType)}> 🡨 </button>
                <button style={delButtonStyle} onClick={this.props.delCard.bind(this, key, cardRowType)}> X </button>
                <button style={rightButtonStyle} onClick={this.props.moveRight.bind(this, key, cardRowType)}> 🡪 </button>

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
    //width: '20%',
    height: '250px',
    margin: '7px',
    padding: '0px 4px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '4px 4px',
    borderRadius: '5px',
    userSelect: 'none'
}

const leftButtonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    float: 'left'
}

const rightButtonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    float: 'right'
}

const delButtonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    float: 'right'
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