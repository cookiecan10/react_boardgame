import React, { Component } from 'react'
import { relative } from 'path';

class Card extends Component {
    render() {
        const { id, content, code, description} = this.props.card;
        return (
            <div style={cardStyle}>
                <div name='title'>
                    <div style={{margin:'10px 0px 5px 0px'}}>What do we want to know</div>
                    <div style={{fontSize:'25px', margin:'5px 0px 10px'}}>Activity</div>
                </div>

                <div style={contentStyle} name='content'>
                    <div style={{fontSize:'20px'}}>Learning Analytics</div>

                    <ul style={{textAlign:'left'}}>
                        {content.map((x) => (<li>{x}</li>))}
                    </ul>
                </div>

                <div name='description'>
                    <div style={{fontSize:'20px'}}>Description</div><code>(code:{code})</code>
                    <p>{description}</p>
                </div>

            </div>
        )
    }
}

const cardStyle = {
    position: 'relative',
    float: 'left',
    backgroundColor: '#ffff88',
    color: 'black',
    width: '15%',
    margin: '7px',
    padding: '0px 0px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '10px 15px',
    borderRadius: '5px'
}

const contentStyle = {
    backgroundColor: '#55ff55'
}

export default Card