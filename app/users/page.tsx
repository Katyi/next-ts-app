import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';

interface User {
  id: number;
  name: string;

}

const UsersPage = async() => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users', 
    { cache: "no-store" }
    );
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <br />
      <Link href='/' className={styles.usersButton}>Home</Link>
      <ul className={styles.users}>
        {users.map(user => <div className={styles.user} key={user.id}>{user.name}</div>)}
      </ul>
    </>
  )
}

export default UsersPage