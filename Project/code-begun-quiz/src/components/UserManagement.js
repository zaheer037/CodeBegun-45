import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    gender: "",
    username: "",
    password: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (
      !newUser.name ||
      !newUser.age ||
      !newUser.gender ||
      !newUser.username ||
      !newUser.password
    ) {
      alert("Please fill all fields!");
      return;
    }

    let updatedUsers;
    if (editingIndex !== null) {
      // Update existing user
      updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      setEditingIndex(null);
    } else {
      // Add new user
      updatedUsers = [...users, newUser];
    }

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setNewUser({ name: "", age: "", gender: "", username: "", password: "" });
  };

  const handleEditUser = (index) => {
    setNewUser(users[index]);
    setEditingIndex(index);
  };

  const handleDeleteUser = (username) => {
    const updatedUsers = users.filter((user) => user.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="container mt-5">
      <h2>User Management</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Age"
          name="age"
          value={newUser.age}
          onChange={handleInputChange}
        />
        <select
          className="form-control mb-2"
          name="gender"
          value={newUser.gender}
          onChange={handleInputChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username"
          name="username"
          value={newUser.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          name="password"
          value={newUser.password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleAddUser}>
          {editingIndex !== null ? "Update User" : "Add User"}
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => handleEditUser(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteUser(user.username)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
