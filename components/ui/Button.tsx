import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 transition-all duration-300 ease-out font-serif tracking-widest text-sm uppercase";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 hover:scale-105",
    outline: "border border-white/30 text-white hover:border-white hover:bg-white/5",
    ghost: "text-white/70 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};