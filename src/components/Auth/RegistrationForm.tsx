import { Button } from '@mantine/core';
import classNames from 'classnames';
import React from'react';
import { useForm } from 'react-hook-form';

interface RegistrationFormProps {
    displayRegistrationInputs: boolean;
}

type RegistrationFormData = {
    name: string,
    surname: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({displayRegistrationInputs}) => {
    const {register, handleSubmit, formState: {errors}} = useForm<RegistrationFormData>();
    
    const registration = (data: RegistrationFormData) => {
        // Make API request to login user
        console.log(data);
    };

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
            <div className="form-group registrationGroup">
                <input
                    {...register('email', {required: true})}
                    className='auth-input' 
                    type="text"
                    placeholder='Электронная почта'
                />
                {errors?.email && <p className='form-error'>
                    Обязательное поле
                </p>}
            </div>
            <div className="form-group registrationGroup">
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
                    {...register('confirmPassword', {required: true})}
                    className='auth-input' 
                    type="password"
                    placeholder='Пароль еще раз'
                />
                {errors?.confirmPassword && <p className='form-error'>
                    Обязательное поле
                </p>}
            </div>
            <Button className='auth-submit' color='#DB1403' type='submit'>Зарегистрироваться</Button>
        </form>
    );
};
export default RegistrationForm;
