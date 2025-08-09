import { ButtonProps } from '@/interfaces'
import React from 'react'

const Button: React.FC<ButtonProps> = ({
    title,
    styles
}) => {
  return (
    <button className={styles}>{title}</button>
  )
}

export default Button