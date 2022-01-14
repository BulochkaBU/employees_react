import { Component } from 'react';
import './app-filter.css';


class AppFilter extends Component {


    choiceFilter = (e) => {
        const newNameFilter = e.target.name;
        this.props.onFilter(newNameFilter)
        this.setState({
            filterName: newNameFilter
        })
    }
    

    render() {
        return (
            <div className="btn-group">
                <button
                    className='btn btn-light'
                    type='button'
                    onClick={this.choiceFilter}>
                        Все сотрудники
                </button>
                <button
                    className='btn btn-outline-light'
                    type='button'
                    name="like"
                    onClick={this.choiceFilter}>
                        На повышение
                </button>
                <button
                    className='btn btn-outline-light'
                    type='button'
                    name="salary"
                    onClick={this.choiceFilter}>
                        З/П меньше 3000$
                </button>
            </div>
        );
    }
}

export default AppFilter;