import React, {Component} from 'react';
import TemplateCard from '../../cards/boardCards/Template_Card'

var cardType = 'LetCard';


class LETCard extends TemplateCard {
    render() {
        const { key, title, enhancements, code, analytics } = this.props.card;
        const cardRowType = this.props.cardRowType;

        var cardStyle = {...this.allCardStyle, ...LETCardStyle};

        return (
            <div style={cardStyle} className='Card'>

                <div name='title'>
                    <div style={{ fontSize: '13px', margin: '5px 0px 5px' }}>enhancement opportunities</div>
                </div>

                <div>
                    <ul style={{textAlign:'left', listStylePosition: 'inside'}}>
                        {enhancements}
                    </ul>
                </div>

                <div style={contentStyle} name='content'>
                    <div style={{fontSize:'20px'}}>Learning Analytics</div>

                    <ul style={{textAlign:'left', listStylePosition: 'inside'}}>
                        {analytics}
                    </ul>
                </div>

                <div name='Description'>
                    <div style={{ fontSize: '15px', textAlign: 'center' }}>Learning Enhancing Technology</div><code>(code:{code})</code>
                    <div style={{ fontSize: '17px', fontWeight: 'bold'}}>{title}</div>
                </div>

            </div>
        )
    }
}

const LETCardStyle = {
    backgroundColor: '#ff8888',
}

const contentStyle = {
    backgroundColor: '#55ff55'
}

export default LETCard;