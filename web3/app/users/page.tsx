import React from 'react'
import UserCard from '@/components/UserCard'
import userList from '@/data/users.json'

export default function Users() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {userList.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  )
}
