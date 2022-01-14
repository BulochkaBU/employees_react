import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
    }

    onSearchEmp = (e) => {
        const newSearchText = e.target.value;
        this.setState({searchText: newSearchText})
        this.props.onSea(newSearchText)
    }
    

    render() {
        return (
            <input
            type="text"
            value={this.state.searchText}
            className='form-control search-input'
            placeholder='Найти сотрудника' 
            onChange={this.onSearchEmp}/>
        )

    }

}

export default SearchPanel;

