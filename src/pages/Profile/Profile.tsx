import React from'react';
import { useAppSelector } from '../../hooks/redux';
import { NavLink } from 'react-router-dom';
import { Center, Flex, Text, UnstyledButton } from '@mantine/core';
import './Profile.scss'
import { colors, textStyles } from '../../helpers/const';
import editIcon from '../../assets/edit-icon.svg'
import { useAuthRequired } from '../../hooks/auth';

const Profile: React.FC = () => {
    const { user } = useAppSelector(state => state.userSlice)

    useAuthRequired()

    if(!user){
        return <></>
    }
    return (
        <Center className='profile-container'>
            <Flex direction='column' align='center' w={{base: '100%', md: '70%'}}>
                <Text className='profile-name' fz={textStyles.h2} mb='sm' ta='center'>
                    {user.surname} {user.name}
                    <UnstyledButton>
                        <NavLink to='edit'>
                            <img src={editIcon} alt="Редактировать" className='profile-edit' />    
                        </NavLink>
                    </UnstyledButton>
                </Text>
                {user.description && <Text className='profile-about' fz={textStyles.p} mb="md" c={colors.gray}>
                    {user.description}
                </Text>}
                <div className='profile-groups'>
                    <h3 className='profile-subtitle'>Группы</h3>
                    <ul className='profile-groupList'>
                        <li className='profile-groupItem'>
                            <Text fz={textStyles.p}>
                                10 красных Илонов Масков идут на Кавказ
                            </Text>
                        </li>
                        <li>
                            <Text fz={textStyles.p}>
                                Двадцать один пилот
                            </Text>
                        </li>
                    </ul>
                </div>
            </Flex>
        </Center>
    );
};
export default Profile;
