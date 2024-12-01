import { Button } from '@mantine/core';
import classNames from 'classnames';
import React, { useEffect } from'react';
import { useForm } from 'react-hook-form';
import { signUp } from '../../http/auth';
import { RegistrationFormData } from '../../models/user';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

interface RegistrationFormProps {
    displayRegistrationInputs: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({displayRegistrationInputs}) => {
    const {register, handleSubmit, formState: {errors, isSubmitting, dirtyFields}, setError, watch, trigger} = useForm<RegistrationFormData>({
        reValidateMode: 'onChange',
    });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const registration = async(data: RegistrationFormData) => {
        try {
            await signUp(dispatch, data);
            navigate('/')
        } catch (errorResponse) {
            if(errorResponse instanceof AxiosError){
                if(errorResponse.response?.status === 409){
                    setError('email', {type: 'alreadyExists', message: 'Пользователь с таким email уже зарегистрирован'})
                }
            }
        }
    };
    
    const password = watch('password');
    useEffect(() => {
        if(dirtyFields.confirmPassword){
            trigger('confirmPassword')
        }
    }, [password, trigger, dirtyFields]);

    return (
        <form className={classNames('auth-form', {registrationVisible: displayRegistrationInputs})} onSubmit={handleSubmit(registration)}>
            <div className="form-group registrationGroup">
                <input
                    {...register('name', {required: true})}
                    className='auth-input' 
                    type="text"
                    placeholder='Имя'
                />
                {errors?.name && <p className='form-error'>
                    Обязательное поле
                </p>}
            </div>
            <div className="form-group registrationGroup">
                <input
                    {...register('surname', {required: true})}
                    className='auth-input' 
                    type="text"
                    placeholder='Фамилия'
                />  
                {errors?.surname && <p className='form-error'>
                    Обязательное поле
                </p>}
            </div>
            <div className="form-group loginGroup">
                <input
                    {...register('email', {required: true})}
                    className='auth-input' 
                    type="text"
                    placeholder='Электронная почта'
                />
                {errors?.email && <p className='form-error'>
                    {errors.email.type === 'required' ? 'Обязательное поле' : errors.email.message}
                </p>}
            </div>
            <div className="form-group loginGroup">
                <input
                    {...register('password', {required: true})}
                    className='auth-input' 
                    type="password"
                    placeholder='Пароль'
                />
                {errors?.password && <p className='form-error'>
                    Обязательное поле
                </p>}
            </div>
            <div className="form-group registrationGroup">
                <input
                    {...register('confirmPassword', {
                        required: true,
                        validate: (value: string) => {
                            return value === watch('password');
                        }
                    })}
                    className='auth-input' 
                    type="password"
                    placeholder='Пароль еще раз'
                />
                {errors?.confirmPassword && <p className='form-error'>
                    {errors.confirmPassword.type === 'required' ? 'Обязательное поле' : 'Пароли не совпадают'}
                </p>}
            </div>
            <Button className='auth-submit' color='#DB1403' type='submit' disabled={isSubmitting}>Зарегистрироваться</Button>
        </form>
    );
};
export default RegistrationForm;
