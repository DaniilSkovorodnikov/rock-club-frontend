import React, { useEffect } from'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { NavLink } from 'react-router-dom';
import { Button, Center, Flex, Text, UnstyledButton } from '@mantine/core';
import './Profile.scss'
import { colors, textStyles } from '../../helpers/const';
import editIcon from '../../assets/edit-icon.svg'
import { getMyGroups } from '../../http/groups';

const Profile: React.FC = () => {
    const { user } = useAppSelector(state => state.userSlice)
    const { groups } = useAppSelector(state => state.groupSlice);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        getMyGroups(dispatch)
    }, [dispatch])

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
                    <Flex justify='space-between' align='center'>
                        <h3 className='profile-subtitle'>Группы</h3>
                        <NavLink to='create-group'>
                            <Button>
                                Создать группу
                            </Button>   
                        </NavLink>
                    </Flex>
                    {groups.length > 0 
                        ? <ul className='profile-groupList'>
                            {groups.map(group => <li className='profile-groupItem'>
                                <Text fz={textStyles.p}>
                                    {group.name}
                                </Text>
                            </li>)}
                        </ul>
                        : <Text fz={textStyles.p} c={colors.grayDark}>Вы пока не вступили ни в одну группу</Text>
                    }
                </div>
            </Flex>
        </Center>
    );
};
export default Profile;
