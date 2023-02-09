import React from 'react'

function SelectField({className,value,onChange,options=[]}) {
  return (
    <div>
        <select value={value} onChange={onChange} className={className}>
            {options.map(option => {
                return (
                    <option key={option} value={option}>Priority - {option}</option>
                )
            })}
        </select>
    </div>
  )
}

export default SelectField