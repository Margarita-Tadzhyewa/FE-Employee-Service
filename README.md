# LeverX Employee Services

## Project Description

This project is an **interactive employee directory**, allowing users to:

-   LogIn/LogOut/Register (errors like **Invalid password/email** appears below the input)
-   View a list of employees in **grid** or **list** view
-   Search employees by first name, last name, or ID with a **live search**
-   View **detailed information** about an employee when clicking on their card
-   On the **Profile page**, the **ADMIN** or **HR** can change the employee's data
-   User who is **ADMIN** can change roles in the **Settings page**
-   Fully functional on mobile devices

## How to Run (DEV)

1. Clone the repository or download the project files


2. In terminal write to launch server:
    Backend:

    1. Navigate to the server folder
        cd server
    2. Install dependencies:
        npm install 
    3. Start the server:
        npm run dev
    4. You should see:
        server has started on 3000

3. In terminal to launch FE:
    Frontend:

    1. Go back to the root project folder:
        cd ..
    2. Install dependencies:
        npm install 
    3. Start the frontend:
        npm run dev
    4. The application will open automatically at  http://localhost:5000


**USERS**
1.  email: megumi.fushiguro@leverx.com
    password: test1234
    role: ADMIN

2.  email: luffy.monkey@leverx.com
    password: test1234
    role: EMPLOYEE

2.  email: suskunaramen.monkey@leverx.com
    password: test1234
    role: HR