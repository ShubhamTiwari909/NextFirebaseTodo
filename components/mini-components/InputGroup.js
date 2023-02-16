import React from 'react'
import PropTypes from "prop-types";
import styles from '../../src/styles/Form.module.css'

function InputGroup({title,type,name,placeholder,className,value,onChange}) {
    return (
        <div>
            <div className={styles.formGroup}>
                <label >{title}</label>
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


InputGroup.propTypes = {
    title:PropTypes.string,
    type:PropTypes.string,
    name:PropTypes.string,
    placeholder:PropTypes.string,
    className:PropTypes.string,
    value:PropTypes.any,
    onChange:PropTypes.func
}

export default InputGroup