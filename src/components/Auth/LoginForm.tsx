import { Button, Flex } from '@mantine/core';
import classNames from 'classnames';
import React from'react';
import { useForm } from 'react-hook-form';

type LoginFormData =  {
    email: string,
    password: string,
}

const LoginForm: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormData>();

    const login = (data: LoginFormData) => {
        // Make API request to login user
        console.log(data);
    };

    return (
        <form className={classNames('auth-form')} onSubmit={handleSubmit(login)}>
            <div className="form-group loginGroup">
                <input {...register('email', {required: true})} className='auth-input' type="text" placeholder='Электронная почта'/>
                {errors?.email && <p className='form-error'>
                    {errors.email.type === 'required' && 'Обязательное поле'}
                </p>}
            </div>
            <div className="form-group loginGroup">
                <input {...register('password', {required: true})} className='auth-input' type="password" placeholder='Пароль'/>
                {errors?.password && <p className='form-error'>
                    {errors.password.type === 'required' && 'Обязательное поле'}  
                </p> }
            </div>
            <Button className='auth-submit' color='#DB1403' type='submit'>Авторизоваться</Button>
        </form>
    );
};
export default LoginForm;
