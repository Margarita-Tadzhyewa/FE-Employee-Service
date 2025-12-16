const toolbarItems = [
    { icon: 'src/assets/icons/circle.svg', alt: 'circle-icon', label: 'Photo' },
    { icon: 'src/assets/icons/user.svg', alt: 'user-icon', label: 'Name' },
    { icon: 'src/assets/icons/bag.svg', alt: 'bag-icon', label: 'Department' },
    { icon: 'src/assets/icons/door.svg', alt: 'room-icon', label: 'Room' },
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
