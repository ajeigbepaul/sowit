import React from 'react'

function InputText({type,placeholder,className,value,name}) {
  return (
    <input type={type} placeholder={placeholder} className={className} value={value} name={name}/>
  )
}

export default InputText