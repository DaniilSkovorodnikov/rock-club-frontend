import React from'react';
import logo from '../assets/logo.svg'

const Logo: React.FC = () => {
  return (
    <img src={logo} alt='Логотип' height={33} width={224}/>
  );
};
export default Logo;
