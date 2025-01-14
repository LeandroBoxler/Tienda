import React from 'react'

interface Input {
    type:string
}

export const Input = ({
    type,

}:Input) => {
  return (
    <input className='p-1 border border-s-gray'  type={type} />
)
}
