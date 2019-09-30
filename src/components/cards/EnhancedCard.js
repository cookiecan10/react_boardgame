import React, { Component } from 'react'


class Card extends Component {
    render() {
        const { id, content, code, description} = this.props.card;
        return (
            <div style={cardStyle}>
                <div name='title'>
                    <div style={{ fontSize: '15px', textAlign: 'center', margin: '5px 0px 5px' }}>enhancement opportunities</div>
                    <div style={{ fontSize: '10px',margin: '5px 0px 5px' }}>- content</div>
                </div>

                <div style={contentStyle} name='content'>
                    <div style={{fontSize:'20px'}}>Learning Analytics</div>

                    <ul style={{textAlign:'left'}}>
                        {content.map((x) => (<li>{x}</li>))}
                    </ul>
                </div>

                <div name='Description'>
                    <div style={{ fontSize: '15px', textAlign: 'center' }}>Learning Enhancing Technology</div><code>(code:{code})</code>
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
    backgroundColor: '#ff8888',
    color: 'black',
    width: '20%',
    height: '100%',
    margin: '7px',
    padding: '0px 4px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '4px 4px',
    borderRadius: '5px'
}

const contentStyle = {
    backgroundColor: '#55ff55'
}

export default Card