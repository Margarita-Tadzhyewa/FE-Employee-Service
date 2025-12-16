import gridIcon from '../../../assets/icons/grid.svg'
import listIcon from '../../../assets/icons/list.svg'

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
                <span>{amount}</span> employees displayed
            </p>
            <img
                src={gridIcon}
                alt="grid-icon"
                className={`icons-type ${
                    typeView === 'grid' ? 'icons-type-active' : ''
                }`}
                onClick={() => setTypeView('grid')}
            />
            <img
                src={listIcon}
                alt="list-icon"
                className={`icons-type ${
                    typeView === 'list' ? 'icons-type-active' : ''
                }`}
                onClick={() => setTypeView('list')}
            />
        </>
    )
}
