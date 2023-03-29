import { getUser, User } from '@/api/users/users.mock'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import React, { useEffect, useState } from 'react'
import styles from './user-detail.module.scss'

export type UserDetailProps = {
    userId: string
}

export function UserDetail({ userId }: UserDetailProps) {
    const [editMode, setEditMode] = useState(false)
    const [user, setUser] = useState<User | undefined>()

    async function updateUser() {
        const newUser = await getUser(userId)
        setUser(newUser)
    }

    useEffect(() => {
        void updateUser()
    }, [])

    if (user === undefined) {
        return
    }

    const editButton = editMode ? (
        <Button
            label={'Guardar'}
            intent="primary"
            onClick={() => {
                // Llamaremos a la API updateUser(user)
                setEditMode(false)
            }}
        />
    ) : (
        <Button
            label={'Editar'}
            intent="primary"
            onClick={() => {
                setEditMode(true)
            }}
        />
    )

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <h1>Datos generales</h1>
                <Button
                    label={'Borrar'}
                    intent="secondary"
                    onClick={() => {
                        // Mostrar una pantalla modal
                        // Refrescar el elemento desde de la api
                    }}
                />
                {editButton}
            </div>
            <div className={styles.inputs}>
                <Input
                    id="username"
                    label="Nombre de usuario"
                    value={user.username}
                    onChange={(value) => {
                        setUser({ ...user, username: value })
                    }}
                    required
                    disabled={!editMode}
                />
                <Input
                    id="name"
                    label="Nombre"
                    value={user.firstName}
                    onChange={(value) => {
                        setUser({ ...user, firstName: value })
                    }}
                    required
                    disabled={!editMode}
                />
                <Input
                    id="lastName"
                    label="Apellido 1"
                    value={user.lastName}
                    onChange={(value) => {
                        setUser({ ...user, lastName: value })
                    }}
                    required
                    disabled={!editMode}
                />
                <Input
                    id="lastName2"
                    label="Apellido 2"
                    value={user.lastName2}
                    onChange={(value) => {
                        setUser({ ...user, lastName2: value })
                    }}
                    required
                    disabled={!editMode}
                />
                <Input
                    id="email"
                    label="Email"
                    value={user.email}
                    onChange={(value) => {
                        setUser({ ...user, email: value })
                    }}
                    required
                    disabled={!editMode}
                />
                <Input
                    id="phone"
                    label="Teléfono"
                    value={user.phone}
                    onChange={(value) => {
                        setUser({ ...user, phone: value })
                    }}
                    required
                    disabled={!editMode}
                />
                <Input
                    id="nif"
                    label="NIF"
                    value={user.nif}
                    onChange={(value) => {
                        setUser({ ...user, nif: value })
                    }}
                    required
                    disabled={!editMode}
                />
            </div>
        </main>
    )
}
