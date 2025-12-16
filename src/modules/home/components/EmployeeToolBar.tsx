interface EmployeeToolBarProps {
    typeView: 'grid' | 'list'
    setTypeView: (view: 'grid' | 'list') => void
    amount: number
}

export const EmployeeToolBar = ({
    typeView,
    setTypeView,
    amount,
}: EmployeeToolBarProps) => {
    return (
        <>
            <p>
                <span>{amount}</span> employess displayed
            </p>
            <img
                src="../../assets/icons/grid.svg"
                alt=""
                className={`icons-type ${
                    typeView === 'grid' ? 'icons-type-active' : ''
                }`}
                onClick={() => setTypeView('grid')}
            />
            <img
                src="../../assets/icons/list.svg"
                alt=""
                className={`icons-type ${
                    typeView === 'list' ? 'icons-type-active' : ''
                }`}
                onClick={() => setTypeView('list')}
            />
        </>
    )
}
