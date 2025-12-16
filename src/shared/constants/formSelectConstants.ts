export const departments = ['Web & Mobile', 'Design', 'Finance', 'Marketing', 'Sales', 'Testing']
export const buildings = ['Main Building', 'Pilsudskiego  69', 'Pilsudskiego  69', 'Pilsudskiego  69']
export const rooms = ['101', '102', '103', '201', '202', '203', '301', '302', '303']
export const citizenships = [
    'Germany',
    'Canada',
    'UK',
    'Belarus',
    'France',
    'Japan',
    'China',
    'Other',
]
export const managers = [
    { id: 'd6d206e5-2ca4-443d-8404-dc84e2d15', name: 'Eren Yeger' },
    { id: 'd6d206e5-2ca4-443d-8404-dc05dffd284e2d15', name: 'Tanjiro Kamado' },
    { id: 'd6d2ff06e5-2ca4-443d-8404-dc05284e2d15', name: 'Sukuna Ramen' },

]

const currentYear = new Date().getFullYear()
export const years = Array.from({ length: 100 }, (_, i) => currentYear - i)