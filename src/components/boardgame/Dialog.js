import React, { Component } from 'react'

class Dialog extends Component {
    render() {
        let dialog = (
            <div style={dialogStyle}>

                <button style={closeButtonStyle} onClick={this.props.onClose}>X</button>

                <div>
                    {this.props.children}
                </div>
            </div>
        );

        // Check if the dialog box is closed, if it's closed -> return null
        if (!this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        )
    }
}

const dialogStyle = {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    opacity: '0.9',
    top: '0',
    left: '0', 
    bottom: '0', 
    right: '0',
    margin: 'auto',
    padding: '10px',
    width: '800px',
    height: '440px',
    borderRadius: '10px',
    display: 'flex',    // Note to self, google what 'flex' actually does
    flexDirection: 'column'
}

const closeButtonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
}

export default Dialog;