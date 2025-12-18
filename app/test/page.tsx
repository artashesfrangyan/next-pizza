'use client';

import React from 'react';

export default function BrokenUserList() {
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState('');

  const fetchUsers = React.useCallback(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, [users]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const render = React.useRef(0);
  React.useEffect(() => {
    render.current = render.current + 1
  })
  return (
    <div>
      <div>Renders count: {render.current}</div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск..."
      />
      <button onClick={fetchUsers}>Загрузить пользователей</button>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
