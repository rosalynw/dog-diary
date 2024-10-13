'use client';

import useSWR from 'swr';

// Fetcher function using fetch API
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UsersPage() {
  // Fetch users from API
  const { data: users, error, isLoading } = useSWR('/api/users', fetcher);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users: {error.message}</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-4 bg-gray-100 rounded-lg">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>First Name:</strong> {user.first_name}</p>
              <p><strong>Last Name:</strong> {user.last_name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
