import React, { useState } from'react';
import './Auth.scss'
import { Center, Flex, UnstyledButton } from '@mantine/core';
import Logo from '../../components/Logo';
import classNames from 'classnames';
import RegistrationForm from '../../components/Auth/RegistrationForm';
import LoginForm from '../../components/Auth/LoginForm';
import BackButton from '../../components/BackButton/BackButton';

type LoginForm = {
  email: string;
  password: string;
}

type RegistrationForm = {
  email: string;
  password: string;
  confirmPassword: string;
}

const Auth: React.FC = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [displayRegistrationInputs, setDisplayRegistrationInputs] = useState(false)

  const handleChangeType = (type: "login" | "registration") => {
    if(type === "login"){
      setDisplayRegistrationInputs(false)
      setTimeout(() => {
        setIsRegistration(false)
      }, 200)
    } else {
      setIsRegistration(true)
      setTimeout(() => {
        setDisplayRegistrationInputs(true)
      }, 0)
    }
  }

  return (
    <Flex
      justify='center'
      h='100vh'
      className='auth'
    >
        <BackButton className='auth-back'/>
        <Flex direction='column' className='auth-container'>
          <Center className='auth-logo'>
            <Logo/>
          </Center>
          <Flex justify='space-between'>
            <UnstyledButton onClick={() => handleChangeType('login')}>
              <h3 className={classNames('auth-type', {active: !displayRegistrationInputs})}>Авторизация</h3>
            </UnstyledButton>
            <UnstyledButton onClick={() => handleChangeType('registration')}>
              <h3 className={classNames('auth-type', {active: displayRegistrationInputs})}>Регистрация</h3>
            </UnstyledButton>
          </Flex>
          {isRegistration ? <RegistrationForm displayRegistrationInputs={displayRegistrationInputs}/> :  <LoginForm/>}
        </Flex>
    </Flex>
  );
};
export default Auth;
