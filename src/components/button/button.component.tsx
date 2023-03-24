import classNames from 'classnames'
import React from 'react'
import styles from './button.module.scss'

export type ButtonProps = {
    label: string
    onClick: () => void
    intent: 'primary' | 'secondary'
}

export function Button({ label, onClick, intent }: ButtonProps) {
    return (
        <button
            className={classNames(styles.container, {
                [styles.primary]: intent === 'primary',
                [styles.secondary]: intent === 'secondary',
            })}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
