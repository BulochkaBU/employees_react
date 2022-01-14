import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentSalary: ''
        }
    }

    onChangeSalary = (e) => {
        const newSalary = e.target.value.slice(0, -1)
        this.setState({
            currentSalary: newSalary
        })
        this.props.changeSalary(this.props.name, newSalary)
    }
        
    render(){
        const {name, salary, onDelete2, onToggleProp, increase, like} = this.props;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase){
            classNames += " increase"
        }

        if (like){
            classNames += " like"
        }
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle='like'>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} onChange={this.onChangeSalary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        data-toggle='increase'
                        onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>                        
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete2}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
        
}

export default EmployeesListItem;