import React from 'react';
import LetCard from './components/LetCard'
import InteractionCard from './components/InteractionCard'
import PedagogyCard from './components/PedagogyCard'
import QuestionCard from './components/QuestionCard'
import CardListRow from './components/CardListRow'
import axios from 'axios';
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component'; // je kan een dropdown aanmaken die een of meerdere seleties toelaat, zie de betreffende componenten voor meer info.

import './Overview.css';



class CardList extends React.Component {
    constructor(props){
        super(props)
        axios.get("https://cardgame.shannendolls.com/api/v1.0/cards").then(res => this.proccesGetCards(res.data));
    }
    proccesGetCards = (cardsData) => {
        let cards = cardsData.cards;
        console.log('Cards collected from server: ', cards);
        cards.map((card) => {
            if (card.cardType === undefined){
                console.log("Incorrect card format provided, cannot procces this card!", card)
            } else {

                switch(card.cardType){
                    case 'InteractionCards':
                                                    // key, to, from, description, id, isEmpty
                        let iCard = new InteractionCard(null, card.to, card.from, card.description, card._id, false);
                        this.setState({allInteractionCards: [...this.state.allInteractionCards, iCard] });
                        break;
                    case 'QuestionCards':
                                                    // key, title, content, code, description, id, isEmpty
                        let qCard = new QuestionCard(null, card.title, card.content, card.code, card.description, null, false );
                        this.setState({allQuestionCards: [...this.state.allQuestionCards, qCard]});
                        break;
                    case 'LETCards':
                                            // key=null, title='', enhancements=[], code='', analytics=[], id=null, isEmpty=true
                        let lCard = new LetCard(null, card.title, card.enhancements, card.code, card.analytics, null, false)
                        this.setState({allLETCards: [...this.state.allLETCards, lCard]})
                    default:
                        console.log('Unrecognised card: ', card);
                        break;
                }
            }
        })
    }
    

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]));
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
            [key]: temp
        });
    }

    state = {
        allLETCards:[

        ],
        allQuestionCards:[

        ],
        allInteractionCards:[

        ],
        cardCategories: [
            {
                id: 0,
                title: 'L.E.T. cards',
                selected: false,
                key: 'CardCategories'
            },
            {
                id: 1,
                title: 'Interaction cards',
                selected: false,
                key: 'CardCategories'
            },
            {
                id: 2,
                title: 'Activity cards',
                selected: false,
                key: 'CardCategories'
            },
            {
                id: 3,
                title: 'Pedagogy cards',
                selected: false,
                key: 'CardCategories'
            }
        ],
        cards:[],
    }
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div className="container">
                                <div className="wrapper">
                                    <Dropdown style={DropdownStyle}
                                        title="Select Category"//Dit is de titel van dropdown,ui taal moet engels zijn.
                                        list={this.state.cardCategories} //de dropdown wordt gevult met de items die in de state gedfineerd worden.
                                        resetThenSet={this.resetThenSet}                                    
                                    />                                   
                                </div>
                                <div>
                                    <button content="Sample Button" style ={ButtonStyle}>Voeg een kaart toe (WIP)</button>
                                </div>  
                        <div className='Cardlist'>
                            <CardListRow cards = {this.state.allInteractionCards}>                               
                            </CardListRow>
                            <CardListRow cards = {this.state.allLETCards}>                                
                            </CardListRow>
                            <CardListRow cards = {this.state.allQuestionCards}>                              
                            </CardListRow>
                        </div>
                                
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }

}
const DropdownStyle = {
    border: '20px',
    backgroundColor: '#ff00ff' 
}
const ButtonStyle = {
    border: '5px',
    height: '50px',
    width: '220px',
    borderStyle: 'solid',
    borderColor: 'grey',
    backgroundColor: 'white',
}

export default CardList