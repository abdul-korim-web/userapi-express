# Todo API - Node.js & Express (MVC Pattern)

A simple **RESTful Todo API** built with **Node.js** and **Express.js**, structured using the **MVC (Model-View-Controller) pattern**. This API allows CRUD operations for managing users and todos.

## 🚀 Features

- Create new todo items / users
- View all todos / users/
- Get a single todo / user by ID
- Update todo / user by ID
- Delete todo / user by ID
- Fully JSON-based API
- Structured following MVC pattern
- Simple user management

## ⚙️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **ES Modules** - Modern JavaScript module system
- **Postman / Browser** - To test API endpoints


### 🔹 Models

- Handle data storage (in-memory or database)
- Example: `userModel.js`

### 🔹 Controllers

- Contain all business logic
- Example: `userController.js` → addUser, getAllUsers, updateUser, deleteUser

### 🔹 Routes

- Map HTTP requests to controller functions
- Example: `/api/users` → userRoute

## 📌 User API Endpoints

| Method | Endpoint         | Description                  |
|--------|-----------------|------------------------------|
| GET    | `/api/users`     | Get all users               |
| GET    | `/api/users/:id` | Get a single user by ID     |
| POST   | `/api/users/adduser`     | Create a new user           |
| PUT    | `/api/users/change/:id` | Update a user by ID         |
| DELETE | `/api/users/delete/:id` | Delete a user by ID         |


## 🛠️ How to Run

1. **Clone the repository:**
```bash
git clone https://github.com/abdul-korim-web/userapi-express
```
2. **Navigate to the project folder:**
```bash
cd userapi-express
```
3. **Install dependencies:**
```bash
npm install

```
4. **Start the server:**
```bash
node index.js
```

## 📜 License & Copyright

This project is **open-source and free to use** under the **MIT License**.  

You can freely:
- ✅ View, modify, and use the source code  
- ✅ Distribute or include it in your own projects  
- ✅ Use it for personal or commercial purposes  

Just make sure to keep the original author credit:

**© 2025 Abdul Korim**

## For collaboration or inquiries, contact:  
📧 Email: abdulkorimwebdeveloper@gmail.com <br> 
👉 GitHub: [abdul-korim-web](https://github.com/abdul-korim-web) <br>
👉 Facebook: [abdul-korim-web](https://www.facebook.com/abdulkorimweb) <br>
👉 LinkedIn: [abdul-korim-web](https://www.linkedin.com/in/abdul-korim-web/) <br>

