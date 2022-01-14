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
                {name: "John G.", salary: 1800, increase: false, like: false, id: 1},
                {name: "Mike D.", salary: 3000, increase: false, like: false, id: 2},
                {name: "Jane X.", salary: 5500, increase: false, like: false, id: 3},
            ],
            searchText: '',
            filterName: 'all'
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
            like: false,
            id: this.maxId ++
        }

        this.setState(({dataEmployees}) => {
            return {
                dataEmployees: [...dataEmployees, newEmployee]
            }
        });
    }

    onToggleProp = (id, prop) => {
        // this.setState(({dataEmployees}) => {
        //     const index = dataEmployees.findIndex(elem => elem.id === id);
        //     const old = dataEmployees[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...dataEmployees.slice(0,index), newItem, ...dataEmployees.slice(index+1)]

        //     return {
        //         dataEmployees: newArr
        //     }           
        // })

        this.setState(({dataEmployees}) => ({
            dataEmployees: dataEmployees.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}                    
                }
                return item
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    onUpdateSearch = (newText) => {
        this.setState({searchText: newText});

    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'like':  return items.filter(item => item.like);
            case 'salaryless3000':  return items.filter(item => item.salary < 3000);
            default: return items
        }                      
    }

    onUpdateFilter = (filter) => {
        this.setState({filterName: filter})
    }

    changeSalary = (name, salary) => {
        this.setState(({dataEmployees}) => ({
            dataEmployees: dataEmployees.map(item => {
                if (item.name === name) {
                    return {...item, salary}
                }
                return item;
            })
        }))
    }

    render() {
        const {dataEmployees, searchText, filterName} = this.state;
        const allEmployees = this.state.dataEmployees.length;
        const increased = this.state.dataEmployees.filter(item => item.increase).length;
        const visibleData = this.filterEmp(this.searchEmployee(dataEmployees, searchText), filterName);
        return (
            <div className="app">
                <AppInfo allEmployees={allEmployees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel onSea={this.onUpdateSearch}/>

                    <AppFilter onFilter={this.onUpdateFilter} filterName={filterName}/>
                </div>
    
                <EmployeesList data={visibleData}
                               onDelete={this.deleteItem}
                               onShowId={a => console.log(a)}
                               onToggleProp={this.onToggleProp}
                               changeSalary={this.changeSalary}
                               />
    
                <EmployeesAddForm onPushNewEmpoyee={this.addEmployee}/>
            </div>
        );
    }
}

export default App;