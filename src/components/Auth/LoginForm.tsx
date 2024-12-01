import { Button } from '@mantine/core';
import classNames from 'classnames';
import React from'react';
import { useForm } from 'react-hook-form';
import { LoginFormData } from '../../models/user';
import { useAppDispatch } from '../../hooks/redux';
import { signIn } from '../../http/auth';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';



const LoginForm: React.FC = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}, setError} = useForm<LoginFormData>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const login = async(data: LoginFormData) => {
        try {
            await signIn(dispatch, data);
            navigate('/')
        } catch (errorResponse) {
            if(errorResponse instanceof AxiosError){
                if(errorResponse.response?.status === 400){
                    setError('root', {type: 'invalid', message: 'Неправильный email или пароль'})
                }
            }
        }  
    };

    return (
        <form className={classNames('auth-form')} onSubmit={handleSubmit(login)}>
            <div className="form-group loginGroup">
                <input
                    {...register('email', {required: true})}
                    className='form-input'
                    type="text"
                    placeholder='Электронная почта'
                />
                {errors?.email && <p className='form-error'>
                    {errors.email.type === 'required' && 'Обязательное поле'}
                </p>}
            </div>
            <div className="form-group loginGroup">
                <input
                    {...register('password', {required: true})}
                    className='form-input'
                    type="password"
                    placeholder='Пароль'
                />
                {errors?.password && <p className='form-error'>
                    {errors.password.type === 'required' && 'Обязательное поле'}  
                </p> }
            </div>
            {errors?.root && <p className='form-error' style={{marginBottom: 4}}>
                    {errors.root.message}
            </p> }
            <Button className='auth-submit' color='#DB1403' type='submit' disabled={isSubmitting}>Авторизоваться</Button>
        </form>
    );
};
export default LoginForm;
