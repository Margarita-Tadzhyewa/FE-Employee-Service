import bagIcon from '../../../assets/icons/bag.svg'
import doorIcon from '../../../assets/icons/door.svg'
import circleIcon from '../../../assets/icons/circle.svg'
import userIcon from '../../../assets/icons/user.svg'


const toolbarItems = [
    { icon: circleIcon, alt: 'circle-icon', label: 'Photo' },
    { icon: userIcon, alt: 'user-icon', label: 'Name' },
    { icon: bagIcon, alt: 'bag-icon', label: 'Department' },
    { icon: doorIcon, alt: 'room-icon', label: 'Room' },
]

export const CommonToolBar = () => {
    return (
        <div className="common-toolbar">
            {toolbarItems.map((item) => (
                <div key={item.label}>
                    <img src={item.icon} alt={item.alt} />
                    <p>{item.label}</p>
                </div>
            ))}
        </div>
    )
}
