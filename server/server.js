import express from 'express'
import bcrypt from 'bcrypt'
import { nanoid } from 'nanoid'
import cors from 'cors'
import fs from 'fs/promises'

const app = express()
const PORT = 3000
app.use(cors())
app.use(express.json())

const DB_FILE = 'user.json'

const password = 'test1234'
const hash = await bcrypt.hash(password, 10)

async function getUsers() {
    try {
        const data = await fs.readFile(DB_FILE, 'utf-8')
        return JSON.parse(data).users || []
    } catch {
        return []
    }
}

async function saveUsers(users) {
    await fs.writeFile(DB_FILE, JSON.stringify({ users }, null, 2))
}

//login user
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const users = await getUsers()

        const user = users.find((user) => user.email === email)
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: 'no such user' })
        }

        const isValidPassword = await bcrypt.compare(
            password,
            user.passwordHash
        )
        if (!isValidPassword) {
            return res
                .status(400)
                .json({ success: false, message: 'wrong password' })
        }

        const userWithoutPassword = { ...user }
        delete userWithoutPassword.passwordHash

        res.json({
            success: true,
            message: 'login successfully',
            user: userWithoutPassword,
        })
    } catch (err) {
        console.log('error login', err)
        return res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
})

//get all employees
app.get('/employees', async (req, res) => {
    try {
        const employees = await getUsers()

        const usersWithoutPassword = employees.map(
            ({ passwordHash, ...rest }) => rest
        )

        res.json(usersWithoutPassword)
    } catch (err) {
        console.log('error getting all employees', err)
        return res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
})

//get emmployee by id
app.get('/employees/:id', async (req, res) => {
    try {
        const id = req.params.id
        const employees = await getUsers()
        const employee = employees.find((emp) => emp._id === id)

        if (!employee) {
            return res
                .status(400)
                .json({ success: false, message: 'there is no such user' })
        }

        const { passwordHash, ...empWithoutPassword } = employee
        res.json(empWithoutPassword)
    } catch (err) {
        console.log('error getting employee by id', err)
        return res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
})

//register user
app.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body
        console.log(req.body)

        const users = await getUsers()

        const userExist = users.find((user) => user.email === email)
        if (userExist) {
            return res
                .status(400)
                .json({ success: false, message: 'such user already exists' })
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = {
            _id: nanoid(),
            first_name,
            last_name,
            email,
            passwordHash,
        }
        users.push(newUser)
        await saveUsers(users)

        const userWithoutPassword = { ...newUser }
        delete userWithoutPassword.passwordHash

        res.json({
            success: true,
            message: 'user register temporarily',
            user: userWithoutPassword,
        })
    } catch (err) {
        console.log('error register', err)
        return res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
})

//chsnge employee role
app.post('/change-role/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { currentRole } = req.body
        const employees = await getUsers()

        const employeeIndex = employees.findIndex((emp) => emp._id === id)
        employees[employeeIndex].role = currentRole
        await saveUsers(employees)

        return res.json({
            success: true,
            message: 'role changed successfully',
            employeeRole: {
                _id: employees[employeeIndex]._id,
                role: employees[employeeIndex].role,
            },
        })
    } catch (err) {
        console.log('error changing role', err)
        return res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
})

app.patch('/change-data/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const employees = await getUsers()
        const employeeIndex = employees.findIndex((emp) => emp._id === id)

        employees[employeeIndex] = {
            ...employees[employeeIndex],
            ...data,
        }
        await saveUsers(employees)

        return res.json({
            success: true,
            message: 'employee data successfully changed',
        })
    } catch (err) {
        console.log('error changing data', err)
        return res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
})

app.get('/', (_req, res) => {
    console.log('Home page')
    res.send('Hello !')
})

app.post('/logout', (req, res) => {
    res.json({
        success: true,
        message: 'logOut successful',
    })
})

//start server
app.listen(PORT, () => {
    console.log(`server has started on: ${PORT}`)
})
