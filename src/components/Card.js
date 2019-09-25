import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div style={cardStyle}>
                <div name='title'>
                    <div style={{margin:'10px 0px 5px 0px'}}>What do we want to know</div>
                    <div style={{fontSize:'25px', margin:'5px 0px 10px'}}>Activity</div>
                </div>
                <div style={contentStyle} name='content'>
                    <div style={{fontSize:'20px'}}>Learning Analytics</div>
                    <ul style={{textAlign:'left'}}>
                        <li>Presence</li>
                        <li>Number of CLicks</li>
                        <li>Number of live interactions</li>
                    </ul>
                </div>
                <div name='description'>
                    <div style={{fontSize:'20px'}}>Description</div><code>(code:WHAT008)</code>
                    <p>How Active are students</p>
                </div>
            </div>
        )
    }
}

const cardStyle = {
    backgroundColor: '#ffff88',
    color: 'black',
    width: '70%',
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