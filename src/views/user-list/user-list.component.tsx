import { useRouter } from 'next/router'
import type { User } from '@/api/users/users'
import React, { useEffect, useState } from 'react'
import styles from './user-list.module.scss'
import { getUsers } from '@/api/users/users.mock'
import { Button } from '@/components/button'

export type UserListProps = {}

export function UserList() {
    const router = useRouter()

    const [users, setUsers] = useState<User[]>([])

    async function updateUsers() {
        const newUsers = await getUsers()
        setUsers(newUsers)
    }

    useEffect(() => {
        void updateUsers()
    }, [])

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <h1>Usuarios</h1>
                <Button
                    label={'Añadir usuario'}
                    intent="primary"
                    onClick={() => {}}
                />
            </div>
            <table className={styles.usersTable}>
                <thead>
                    <tr>
                        <th>Nombre de usuario</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            onClick={(e) => {
                                e.preventDefault()
                                void router.push(`/users/${user.id}`)
                            }}
                        >
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>
                                {user.lastName} {user.lastName2}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}
