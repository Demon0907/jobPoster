import React from 'react';

// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outlined' | 'default' | undefined, // default, primary, info, success, warning, danger, dark
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

// button component, consuming props
const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = 'default',
  type = 'button',
  disabled,
  ...rest
}) => {
  return (
    <button
      type={type}
      //style mainted in seperate file
      className={`btn ${variant} w-fit` + (disabled ? ' disabled' : '')}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;