import React, { useState, useEffect } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:4005/api/users/users?page=${page}&limit=${limit}`);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [page, limit]);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <strong>Username:</strong> {user.username}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage)}>Previous Page</button>
        <button onClick={() => setPage(prevPage => prevPage + 1)}>Next Page</button>
      </div>
    </div>
  );
};

export default UsersList;
