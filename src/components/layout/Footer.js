import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
                This application has been made by students of Zuyd University
            </div>
        )
    }
}

const footerStyle = {
    background: '#333',
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
    padding: '0px',
    height: '12px',
    fontSize: '8px'
}