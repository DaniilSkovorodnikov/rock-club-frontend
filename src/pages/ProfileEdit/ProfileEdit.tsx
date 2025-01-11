import { Button, Center, Container, Flex, Text } from '@mantine/core';
import React, { useEffect, useState } from'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { colors } from '../../helpers/const';
import { ProfileFormData } from '../../models/user';
import BackButton from '../../components/BackButton/BackButton';
import { updateUser, updateUserImage } from '../../http/user';
import { useNavigate } from 'react-router-dom';
import ImageInput from '../../components/Shared/ImageInput/ImageInput';

const ProfileEdit: React.FC = () => {
    const {user} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();
    const {register, formState: {isSubmitting, isValid}, handleSubmit, setValue, trigger} = useForm<ProfileFormData>({
        defaultValues: {
            name: user?.name,
            surname: user?.surname,
            description: user?.description
        },
        mode: 'onChange'
    });
    const [avatar, setAvatar] = useState<File | null>(null);
    const navigate = useNavigate();

    const saveProfile = async(data: ProfileFormData) => {
        await updateUser(dispatch, data);
        if(avatar){
            await updateUserImage(dispatch, avatar);
        }
        navigate('/profile')
    }

    useEffect(() => {
        if(user){
            const keys: Array<keyof ProfileFormData> = ['name', 'surname', 'description']
            keys.forEach((key) => {
                setValue(key, user[key])
                trigger(key)
            })
        }
    }, [user, setValue, trigger])

    return (
        <Center className='profileEdit'>
            <BackButton className='backButton'/>
            <Flex direction='column' w={{base: '100%', md: '65%'}}>
                <Flex justify='center'>
                    <ImageInput defaultImage={user?.main_image} onChange={(image) => setAvatar(image)}/>
                </Flex>
                <form onSubmit={handleSubmit(saveProfile)}>
                    <Flex direction='column' gap='md'>
                        <input className='form-input' type="text" placeholder='Имя *' {...register('name', {required: true})}/>
                        <input className='form-input' type="text" placeholder='Фамилия *' {...register('surname', {required: true})}/>
                        <Container p={0} mt='md' fluid className="form-group">
                            <Text c={colors.grayDark}>Описание</Text>
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
