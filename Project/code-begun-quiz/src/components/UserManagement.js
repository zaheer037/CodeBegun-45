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

  const [editingUser, setEditingUser] = useState(null); // State for editing a user

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

    // Add user logic
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setNewUser({ name: "", age: "", gender: "", username: "", password: "" });
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser(user); // Pre-fill the form with the user's current data
  };

  const handleSaveEdit = () => {
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

    const updatedUsers = users.map((user) =>
      user.username === editingUser.username ? newUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Reset the form and editing state
    setEditingUser(null);
    setNewUser({ name: "", age: "", gender: "", username: "", password: "" });
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setNewUser({ name: "", age: "", gender: "", username: "", password: "" });
  };

  const handleDeleteUser = (username) => {
    const updatedUsers = users.filter((user) => user.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="container mt-5">
      <h2>User Management</h2>

      {/* Add or Edit User Form */}
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
        <button
          className="btn btn-primary"
          onClick={editingUser ? handleSaveEdit : handleAddUser}
        >
          {editingUser ? "Save Changes" : "Add User"}
        </button>
        {editingUser && (
          <button className="btn btn-secondary ms-2" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </div>

      {/* Users Table */}
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
          {users.map((user) => (
            <tr key={user.username}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditUser(user)}
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
