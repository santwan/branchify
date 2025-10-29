import React from 'react'


const Button = ({ children, duration, }) => {
  return (
    <div className={`bg-amber-500 text-white dark:bg-amber-600 dark:hover:scale-105 dark:hover:bg-amber-500 transition-all duration-${duration} text-xl font-bold border dark:border-orange-600 rounded-md py-3 px-7`}>
      {children}
    </div>
  )
}

export default Button