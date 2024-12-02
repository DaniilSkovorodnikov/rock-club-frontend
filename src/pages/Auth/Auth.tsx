import React, { useState } from'react';
import './Auth.scss'
import { Center, Flex, Text, UnstyledButton } from '@mantine/core';
import Logo from '../../components/Logo';
import RegistrationForm from '../../components/Auth/RegistrationForm';
import LoginForm from '../../components/Auth/LoginForm';
import BackButton from '../../components/BackButton/BackButton';
import { colors, textStyles } from '../../helpers/const';

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
        <BackButton to='/' className='auth-back'/>
        <Flex direction='column' className='auth-container'>
          <Center className='auth-logo'>
            <Logo/>
          </Center>
          <Flex
            justify='space-between'
            align='center'
            my='xl'
          >
            <UnstyledButton onClick={() => handleChangeType('login')}>
              <Text fz={textStyles.h3} c={!displayRegistrationInputs ? colors.white : colors.grayLight} className='auth-type'>
                Авторизация
                </Text>
            </UnstyledButton>
            <UnstyledButton onClick={() => handleChangeType('registration')}>
              <Text fz={textStyles.h3} c={displayRegistrationInputs ? colors.white : colors.grayLight} className='auth-type'>
                Регистрация
              </Text>
            </UnstyledButton>
          </Flex>
          {isRegistration ? <RegistrationForm displayRegistrationInputs={displayRegistrationInputs}/> :  <LoginForm/>}
        </Flex>
    </Flex>
  );
};
export default Auth;
