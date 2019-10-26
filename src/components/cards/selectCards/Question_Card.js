import React, { Component } from 'react'
import TemplateCard from './Template_Card'

// function log(e) {
//     e.preventDefault();
//     console.log("you clicked an Activity Card")
// }


class QuestionCard extends TemplateCard {

    render() {
        const { key, title, content, code, description, cardType } = this.props.card;

        var cardStyle = {...this.allCardStyle, ...questionCardStyle}

        return (
            <div style={cardStyle} onClick={this.props.addCard.bind(this, key, cardType)} className='Card'>

                <div name='title'>
                    <div style={{margin:'8px 0px 0px 0px'}}>What do we want to know</div>
                    <div style={{fontSize:'20px', fontWeight:'bold' ,margin:'0px 0px 5px'}}>{title}</div>
                </div>
                <div style={contentStyle} name='content'>
                    <div style={{fontSize:'17px'}}>Learning Analytics</div>

                    <ul style={{textAlign:'left', listStylePosition: 'inside'}}>
                        {content.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>

                <div name='description'>
                    <div style={{fontSize:'17px'}}>Description <code style={{fontSize:'10px'}}>(code:{code})</code></div>
                    <p>{description}</p> 
                </div>

            </div>
        )
    }
}

const questionCardStyle = {
    backgroundColor: '#ffff88',
}

const contentStyle = {
    backgroundColor: '#55ff55'
}

export default QuestionCard