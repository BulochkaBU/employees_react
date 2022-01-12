import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onDelete, onShowId}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
        //<EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} />
        <EmployeesListItem key={id} {...itemProps} onDelete={() => onDelete(id)} onShowIdItem={() => onShowId(id)}/>
        )
    });



    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;