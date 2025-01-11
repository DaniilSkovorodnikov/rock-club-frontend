import { Center, Flex, UnstyledButton, Button, Text } from '@mantine/core';
import React from'react';
import { NavLink } from 'react-router-dom';
import { textStyles, colors } from '../../helpers/const';
import { Group } from '../../models/group';
import { User } from '../../models/user';
import DefaultImage from '../Shared/DefaultImage/DefaultImage';
import editIcon from '../../assets/edit-icon.svg';
import './Profile.scss';

interface ProfileProps {
    user: User,
    groups: Group[],
    canEdit?: boolean,
}

const Profile: React.FC<ProfileProps> = ({user, groups, canEdit}) => {
  return (
    <Center className='profile-container'>
        <Flex direction='column' align='center' w={{base: '100%', md: '70%'}}>
            {user.main_image ? <img className='profile-image' src={user.main_image}/> : <DefaultImage type='user' size='avatar'/>}
            <Text className='profile-name' fz={textStyles.h2} mb='sm' ta='center'>
                {user.surname} {user.name}
                {canEdit && <UnstyledButton>
                    <NavLink to='edit'>
                        <img src={editIcon} alt="Редактировать" className='profile-edit' />    
                    </NavLink>
                </UnstyledButton>}
            </Text>
            {user.description && <Text className='profile-about' fz={textStyles.p} mb="md" c={colors.gray}>
                {user.description}
            </Text>}
            <div className='profile-groups'>
                <Flex justify='space-between' align='center'>
                    <h3 className='profile-subtitle'>Группы</h3>
                    {canEdit && <NavLink to='/create-group'>
                        <Button>
                            Создать группу
                        </Button>   
                    </NavLink>}
                </Flex>
                {groups.length > 0 
                    ? <ul className='profile-groupList'>
                        {groups.map(group => <li className='profile-groupItem' key={group.id}>
                            <NavLink to={`/group/${group.id}`}>
                                <Flex align='center' gap='xl' className='profile-groupContainer'>
                                    {group.main_image ? <img src={group.main_image} className='profile-groupImage'/> : <DefaultImage type='group' size='listIcon'/>}
                                        <Text fz={textStyles.p}>
                                            {group.name}
                                        </Text>
                                </Flex>
                            </NavLink>
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
