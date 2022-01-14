import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: "",
            salarys: ""
        }
    }

    onAddNewEmpoyee = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onNewEmpoyee = (e) => {
        e.preventDefault();
        if (this.state.names.length > 2 && this.state.salarys !== '' && this.state.salarys > 0){
            this.props.onPushNewEmpoyee(this.state.names, this.state.salarys);
            this.setState({
                names: '',
                salarys: ''
            })
        } 
    }     


    render() {
        const {names, salarys} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onNewEmpoyee}>                    
                    <input type="text"
                        className="form-control new-post-label"
                        name="names"
                        value={names}
                        onChange={this.onAddNewEmpoyee}
                        placeholder="Как его зовут?" />
                    <input type="number"
                        className="form-control new-post-label"
                        name="salarys"
                        value={salarys}
                        onChange={this.onAddNewEmpoyee}
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;