import React, { Component } from 'react'
import TemplateCard from '../../cards/boardCards/Template_Card'


class PedagogyCard extends TemplateCard {
    render() {
        const { id, content, code, description } = this.props.card;
        return (
            <div style={cardStyle}>
                <div name='title'>
                    <div style={{ fontSize: '15px', fontWeight: 'bold', margin: '5px 0px 5px' }}>Method</div>
                </div>

                <div style={contentStyle} name='content'>
                    <div style={{ fontSize: '20px' }}>Implementation</div>

                    <ul style={{ textAlign: 'left' }}>
                        {content.map((x) => (<li>{x}</li>))}
                    </ul>
                </div>

                <div name='description'>
                    <div style={{ fontSize: '10px' }}>Description</div><code>(code:{code})</code>
                    <p>{description}</p>
                </div>

            </div>
        )
    }
}

const cardStyle = {
    position: 'relative',
    float: 'left',
    fontSize: '1vh',
    backgroundColor: '#ff88ff',
    color: 'black',
    //width: '20%',
    height: '100%',
    margin: '7px',
    padding: '0px 4px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '4px 4px',
    borderRadius: '5px'
}

const contentStyle = {
    backgroundColor: '#a82aa8'
}
const methodCategory = {
    backgroundColor: '#d982d9' /* gebruiken voor de text onder de methode*/
}

export default PedagogyCard// JavaScript source code