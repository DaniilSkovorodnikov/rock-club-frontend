import React from'react';
import { NavLink } from 'react-router-dom';

const NavLinks: React.FC = () => {
    return (
        <>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to='/join'>Оставить заявку</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to='/schedule'>График репетиций</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to='/about'>О рок-клубе</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to='/profile'>Личный кабинет</NavLink>
        </>
    );
};

export default NavLinks;
