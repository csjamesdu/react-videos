import React from 'react';
import App from './App';

class SearchBar extends React.Component {
    state={ term: 'abcdef'};

    onInputChange = event => {
        this.setState({ term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        // TODO: make sure callback from parent component
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Video Search </label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
