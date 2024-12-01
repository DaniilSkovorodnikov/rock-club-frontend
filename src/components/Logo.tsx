import React from'react';
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <NavLink to='/'>
      <img src={logo} alt='Логотип' height={33} width={224}/>
    </NavLink>
  );
};
export default Logo;
