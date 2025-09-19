'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  whileHover?: any
  whileTap?: any
  style?: React.CSSProperties
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  whileHover,
  whileTap,
  style,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  }
  
  const defaultWhileHover = variant === 'primary' 
    ? { scale: 1.05 }
    : { scale: 1.05 }
    
  const defaultWhileTap = { scale: 0.95 }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={whileHover || defaultWhileHover}
      whileTap={whileTap || defaultWhileTap}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </motion.button>
  )
}
