import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component';

export class CardInfo extends Component {
    state = {
        text: '',
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
        ]
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();//Don't submit to server
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="newText"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add text to card if applicable"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <div>
                    <Dropdown
                        title="Select new card category"
                        list={this.state.cardCategories}
                        resetThenSet={this.resetThenSet}
                    />
                </div>
            </form>
        )
    }
}
export default CardInfo

