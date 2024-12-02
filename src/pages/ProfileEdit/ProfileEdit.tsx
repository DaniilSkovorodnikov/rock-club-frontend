import { Button, Center, Container, Flex, Text } from '@mantine/core';
import React from'react';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../hooks/redux';
import { colors } from '../../helpers/const';
import { ProfileFormData } from '../../models/user';
import { useAuthRequired } from '../../hooks/auth';
import BackButton from '../../components/BackButton/BackButton';
import './ProfileEdit.scss'

const ProfileEdit: React.FC = () => {
    const {user} = useAppSelector(state => state.userSlice);
    const {register, formState: {isSubmitting, isValid}, handleSubmit} = useForm<ProfileFormData>({
        defaultValues: {
            name: user?.name,
            surname: user?.surname,
            description: user?.description
        },
        mode: 'onChange'
    })

    const saveProfile = async(data: ProfileFormData) => {
        console.log(data);
    }

    useAuthRequired();

    return (
        <Center className='profileEdit'>
            <BackButton className='profileEdit-back'/>
            <Flex direction='column' w={{base: '100%', md: '65%'}}>
                <form onSubmit={handleSubmit(saveProfile)}>
                    <Flex direction='column' gap='md'>
                        <input className='form-input' type="text" placeholder='Имя *' {...register('name', {required: true})}/>
                        <input className='form-input' type="text" placeholder='Фамилия *' {...register('surname', {required: true})}/>
                        <Container p={0} mt='md' fluid className="form-group">
                            <Text c={colors.grayLight}>Описание</Text>
                            <textarea className='form-textarea' rows={4} {...register('description')}/>
                        </Container>
                        <Button className='form-submit' type='submit' color='#DB1403' disabled={isSubmitting || !isValid}>Сохранить</Button>
                    </Flex>
                </form>
            </Flex>
        </Center>
    );
};
export default ProfileEdit;
