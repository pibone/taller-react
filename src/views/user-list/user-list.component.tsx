import { useRouter } from 'next/router'
import type { User } from '@/api/users/users'
import React from 'react'
import styles from './user-list.module.scss'

export type UserListProps = {}

export function UserList() {
    const router = useRouter()
    const users: User[] = []
    return (
        <main className={styles.container}>
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
                                void router.push(`./${user.id}`)
                            }}
                        >
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}
