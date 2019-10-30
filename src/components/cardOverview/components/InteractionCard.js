
import React, { Component } from 'react'
import TemplateCard from '../../cards/boardCards/Template_Card'

class InteractionCard extends TemplateCard {
    render() {
        const { key, from, to, description } = this.props.card;
        const cardRowType = this.props.cardRowType;

        var cardStyle = {...this.allCardStyle, ...interactionCardStyle};
        return (
            <div style={cardStyle} className='Card'>
                <div name='title'>
                    <div style={topStyle} name='InteractionTop'>learning enhancing technology</div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold', margin: '10px 0px 0px 0px', textAlign: 'center' }}>Interaction</div>
                    <div style={{ fontSize: '15px', fontWeight: 'normal', margin: '5px 0px 5px', textAlign: 'center' }}>{from} 🠊 {to} </div>
                </div>
                <div style={contentStyle} name='content'>
                    <div style={{ fontSize: '15px' }}><textarea
                                                             rows='4'
                                                             cols='19'
                                                             name='des' 
                                                             style={descriptionStyle} 
                                                             placeholder='Add Description' 
                                                             value={description} />
                                                    </div>
                </div>

                <div name='description'>
                    <div style={bottomStyle}>What do we want to know?
                    </div>
                </div>

            </div>
        )
    }
}
const interactionCardStyle = {
    backgroundColor: '#8888ff',
}

const contentStyle = {
    backgroundColor: '#ffffff'
}

const descriptionStyle = {
    height: 'auto',
    width: 'auto',
    resize: 'none',
    overflow: 'auto',
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