import React, { Component } from 'react'

function log(e) {
    e.preventDefault();
    console.log("you clicked an Activity Card")
}


class TemplateCard extends Component {

    constructor(props){
        super(props);
        this.allCardStyle = allCardStyle;
        this.leftButtonStyle = leftButtonStyle;
        this.rightButtonStyle = rightButtonStyle;
        this.delButtonStyle = delButtonStyle;
    }
}

const allCardStyle = {
    position: 'relative',
    float: 'left',
    fontSize: '1.5vh',
    color: 'black',
    boxShadow: '8px 8px rgba(0, 0, 0, 0.5)',
    //width: '20%',
    height: '250px',
    margin: '7px',
    padding: '0px 4px',
    borderStyle: 'solid',
    borderColor: '#888888',
    borderWidth: '4px 4px',
    borderRadius: '5px',
    userSelect: 'none',
}

const leftButtonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    float: 'left'
}

const rightButtonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    float: 'right'
}

const delButtonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    float: 'right'
}

const contentStyle = {
    backgroundColor: '#55ff55'
}

export default TemplateCard;