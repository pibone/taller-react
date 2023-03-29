import classNames from 'classnames'
import React from 'react'
import styles from './input.module.scss'

export type InputProps = {
    id: string
    label: string
    onChange(value: string): void
    type?: React.InputHTMLAttributes<HTMLInputElement>['type']
    disabled?: boolean
    required?: boolean
    placeholder?: string
    value: string
}

export function Input({
    id,
    label,
    onChange,
    value,
    type = 'text',
    required = false,
    disabled = false,
    placeholder = '',
}: InputProps) {
    return (
        <div
            className={classNames(styles.container, {
                [styles.required]: required,
                [styles.disabled]: disabled,
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
                required={required}
                className={styles.input}
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
            />
        </div>
    )
}
