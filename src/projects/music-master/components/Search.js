import React, {Component} from 'react';

class Search extends Component {
    state = {artistQuery:''};

    updateArtistQuery = event => {
        // Get input one letter at a time
        console.log('event.target.value',event.target.value);

        this.setState({ artistQuery: event.target.value});
    };

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    // Passing Callback from Component - lifting state from parent component though props
    // - presents an issue on multiple pass downs and callbacks through many children (redux state management)
    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }

    render() {
        return (
            <div>
                <input 
                    onChange={this.updateArtistQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder='Search for an Artist'
                />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search;