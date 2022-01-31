import React, { ButtonHTMLAttributes } from 'react';

import { Button as ButtonStyle } from 'src/styles/components/Button';

// import { Container } from './styles';


const Button = ({ children, ...props }: ButtonHTMLAttributes<any>) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}

export default Button;