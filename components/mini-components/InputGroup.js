import React from 'react'
import styles from '../../src/styles/Form.module.css'

function InputGroup({title,type,name,placeholder,className,value,onChange}) {
    return (
        <div>
            <div className={styles.formGroup}>
                <label>{title}</label>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={className}
                    value={value}
                    onChange={onChange} />

            </div>
        </div>
    )
}

export default InputGroup