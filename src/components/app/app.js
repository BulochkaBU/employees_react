import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component{
    constructor(props){
        super(props); 
        this.state = {
            dataEmployees: [
                {name: "John G.", salary: 1800, increase: true, id: 1},
                {name: "Mike D.", salary: 3000, increase: false, id: 2},
                {name: "Jane X.", salary: 5500, increase: false, id: 3},
            ]
        }
        this.maxId = 4;

    }

    deleteItem = (id) => {
        this.setState( ({dataEmployees}) => {
            return {
                dataEmployees: dataEmployees.filter(item => id !== item.id)
            }
        })
    }

    addEmployee = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false,
            id: this.maxId ++
        }

        this.setState(({dataEmployees}) => {
            return {
                dataEmployees: [...dataEmployees, newEmployee]
            }
        });

    }

    

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList data={this.state.dataEmployees} onDelete={this.deleteItem} onShowId={a => console.log(a)}/>
    
                <EmployeesAddForm onPushNewEmpoyee={this.addEmployee}/>
            </div>
        );
    }



}

export default App;