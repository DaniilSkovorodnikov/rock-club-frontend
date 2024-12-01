import React from'react';
import leftArrow from '../../assets/left-arrow.svg'
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { UnstyledButton } from '@mantine/core';
import './BackButton.scss'

interface BackButtonProps {
    className?: string;
}

const BackButton : React.FC<BackButtonProps> = ({className}) => {
    const navigate = useNavigate();

    return (
        <UnstyledButton onClick={() => navigate('/')} className={classNames('backButton', className)}>
            <img className='backButton-icon' src={leftArrow} alt="Назад" width={30} height={20}/>
        </UnstyledButton>
    );
};
export default BackButton;
