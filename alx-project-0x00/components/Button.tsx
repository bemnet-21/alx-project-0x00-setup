import { ButtonProps } from '@/interfaces'
import React from 'react'

const Button: React.FC<ButtonProps> = ({
    title,
    style
}) => {
  return (
    <button className={style}>{title}</button>
  )
}

export default Button