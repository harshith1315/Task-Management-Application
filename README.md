# Task-Management-Application
## Todo List Application

This is a simple Todo List application built using React for the frontend and Node.js with Express and MongoDB for the backend.

### Features

- View a list of tasks with their status and deadlines.
- Add new tasks with status and deadline.
- Edit existing tasks.
- Delete tasks.

### Technologies Used

- Frontend:
  - React
  - React Router
  - Axios
  - Bootstrap
  
- Backend:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/harshith1315/TODO-MERN-Stack.git
```
2. Navigate to the project directory:
```bash
cd todo-list-app
```
3. Install dependencies for both frontend and backend:
```bash
cd client
npm install
cd ..
cd server
npm install
cd ..
```
### Usage

1. Start the backend server:
```bash
cd server
npm start
```
This will start the server on http://localhost:3001.

2. Start the frontend development server:
```bash
cd client
npm start
```
This will start the React development server on http://localhost:3000 and open the application in your default web browser.
### Configuration

- MongoDB Connection: Make sure to replace the MongoDB connection string in `server/server.js` with your own MongoDB Atlas connection string or local MongoDB instance URL.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

