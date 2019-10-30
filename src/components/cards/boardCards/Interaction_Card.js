import React from 'react'
import TemplateCard from './Template_Card'

function log(e) {
    e.preventDefault();
    console.log("you clicked an Interaction Card")
}

class InteractionCard extends TemplateCard {

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log('this is actually happening')
        //this.props.moveLeft.bind(this, 4, cardRowType)
        // this.props.changeIDescription.bind(this, key, this.state.des);
    }
    // this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();//Don't submit to server
    }

    render() {
        const { key, from, to, description } = this.props.card;
        const cardRowType = this.props.cardRowType;

        var cardStyle = {...this.allCardStyle, ...interactionCardStyle};

        return (
            <div style={cardStyle} onClick={log} className='Card'>

                <button style={this.leftButtonStyle} onClick={this.props.moveLeft.bind(this, key, cardRowType)}> 🡨 </button>
                <button style={this.delButtonStyle} onClick={this.props.delCard.bind(this, key, cardRowType)}> X </button>
                <button style={this.rightButtonStyle} onClick={this.props.moveRight.bind(this, key, cardRowType)}> 🡪 </button>

                <div name='title'>
                    <div style={topStyle} name='InteractionTop'>learning enhancing technology</div>
                    <div style={{ fontSize: '15px', fontWeight: 'bold', margin: '10px 0px 0px 0px', textAlign: 'center' }}>Interaction</div>
                    <div style={{ fontSize: '15px', fontWeight: 'normal', margin: '5px 0px 5px', textAlign: 'center' }}>{from} 🠊 {to} </div>
                </div>
                <div style={contentStyle} name='content'>
                    <div style={{ fontSize: '15px' }}><form onSubmit={this.onSubmit}><textarea
                                                             rows='4'
                                                             cols='19'
                                                             name='des' 
                                                             style={descriptionStyle} 
                                                             placeholder='Add Description' 
                                                            //  value={this.state.des} 
                                                             onChange={this.props.changeIDescription.bind(this, key)}/>
                                                    </form></div>
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