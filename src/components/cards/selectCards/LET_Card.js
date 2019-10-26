import React, { Component } from 'react'
import TemplateCard from './Template_Card'

// function log(e) {
//     e.preventDefault();
//     console.log("you clicked an Enhanced Card")
// }

class LETCard extends TemplateCard {
    render() {
        const { key, title, enhancements, code, analytics, cardType } = this.props.card;

        var cardStyle = {...this.allCardStyle, ...LETCardStyle};

        return (
            <div style={cardStyle} onClick={this.props.addCard.bind(this, key, cardType)} className='Card'>

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
    position: 'relative',
    float: 'left',
    fontSize: '1vh',
    backgroundColor: '#ff8888',
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
    backgroundColor: '#55ff55'
}

export default LETCard