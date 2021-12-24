import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        {name: "John G.", salary: 1800, increase: true, key: 1},
        {name: "Mike D.", salary: 3000, increase: false, key: 2},
        {name: "Jane X.", salary: 5500, increase: false, key: 3},
    ];



    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data} />

            <EmployeesAddForm/>
        </div>
    );
}

export default App;