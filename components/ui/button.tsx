import React from 'react'

const Button = ({text}:{text:string}) => {
  return (
    <button className="bg-primary cursor-pointer text-white font-bold uppercase  px-[50px] py-[22px] rounded-none hover:bg-white hover:text-primary transition-colors duration-300">
      {text}
    </button>
  )
}

export default Button