import classNames from 'classnames'
import React from 'react'
import styles from './input.module.scss'

export type InputProps = {
    id: string
    label: string
    onChange(value: string): void
    type?: React.InputHTMLAttributes<HTMLInputElement>['type']
    required?: boolean
    placeholder?: string
}

export function Input({
    id,
    label,
    onChange,
    type = 'text',
    required = false,
    placeholder = '',
}: InputProps) {
    return (
        <div
            className={classNames(styles.container, {
                [styles.required]: required,
            })}
        >
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input
                onChange={(e) => {
                    e.preventDefault()
                    onChange(e.target.value)
                }}
                className={styles.input}
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
            ></input>
        </div>
    )
}
