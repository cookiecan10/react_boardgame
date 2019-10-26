import React, { Component } from 'react'

// function log(e) {
//     e.preventDefault();
//     console.log("you clicked an Activity Card")
// }


export default class QuestionCard extends Component {
    constructor(props){
        super(props);
        this.allCardStyle = allCardStyle;
    }
}

const allCardStyle = {
    position: 'relative',
    float: 'left',
    fontSize: '1.5vh',
    backgroundColor: '#ffff88',
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
    flexDirection: 'row',
    cursor: 'pointer'
}