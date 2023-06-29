import React from 'react'

function InputText({type,placeholder,className,value,name,onChange}) {
  return (
    <input type={type} placeholder={placeholder} className={className} value={value} name={name} onChange={onChange} required/>
  )
}

export default InputText