import React from 'react'

const TextInput = (
    {
        inputValue,
        setInputValue,
        placeholder="Enter your name"
    }
) => {
  return (
    <div>
        <input value={inputValue} onChange={setInputValue} placeholder= {placeholder} className=''/>
    </div>
  )
}

export default TextInput