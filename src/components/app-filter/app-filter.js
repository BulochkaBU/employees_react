import './app-filter.css';


const AppFilter = (props) =>  {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'like', label: 'На повышение'},
        {name: 'salaryless3000', label: 'З/П меньше 3000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.newNameFilter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                    className={`btn ${clazz}`}
                    type='button'
                    key={name}
                    onClick={() => props.onFilter(name)}>
                        {label}
                </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;