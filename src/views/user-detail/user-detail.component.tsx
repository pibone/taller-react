import React from 'react'
import styles from './user-detail.module.scss'

export type UserDetailProps = {
    userId: string
}

export function UserDetail({ userId }: UserDetailProps) {
    return <main className={styles.container}></main>
}
