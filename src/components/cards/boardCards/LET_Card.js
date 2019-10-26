import React, { Component } from 'react'
import TemplateCard from './Template_Card'

function log(e) {
    e.preventDefault();
    console.log("you clicked an Enhanced Card")
}

class LETCard extends TemplateCard {
    render() {
        const { key, title, enhancements, code, analytics } = this.props.card;
        const cardRowType = this.props.cardRowType;

        var cardStyle = {...this.allCardStyle, ...LETCardStyle};

        return (
            <div style={cardStyle} onClick={log} className='Card'>

                <button style={this.leftButtonStyle} onClick={this.props.moveLeft.bind(this, key, cardRowType)}> 🡨 </button>
                <button style={this.delButtonStyle} onClick={this.props.delCard.bind(this, key, cardRowType)}> X </button>
                <button style={this.rightButtonStyle} onClick={this.props.moveRight.bind(this, key, cardRowType)}> 🡪 </button>

                <div name='title'>
                    <div style={{ fontSize: '13px', margin: '5px 0px 5px' }}>enhancement opportunities</div>
                </div>

                <div>
                    <ul style={{textAlign:'left', listStylePosition: 'inside'}}>
                        {enhancements.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>

                <div style={contentStyle} name='content'>
                    <div style={{fontSize:'20px'}}>Learning Analytics</div>

                    <ul style={{textAlign:'left', listStylePosition: 'inside'}}>
                        {analytics.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>

                <div name='Description'>
                    <div style={{ fontSize: '15px', textAlign: 'center' }}>Learning Enhancing Technology</div><code>(code:{code})</code>
                    <div style={{ fontSize: '17px', fontWeight: 'bold'}}>{title}</div>
                </div>

            </div>
        )
    }
}

const LETCardStyle = {
    backgroundColor: '#ff8888',
}

const contentStyle = {
    backgroundColor: '#55ff55'
}

export default LETCard