import React from'react';
import { User } from '../../../models/user';
import { Flex, Text } from '@mantine/core';
import DefaultImage from '../../Shared/DefaultImage/DefaultImage';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';

interface GroupMembersProps {
    groupMembers: User[]
}

const GroupMembers: React.FC<GroupMembersProps> = ({groupMembers}) => {
    const {user: myUser} = useAppSelector(state => state.userSlice)

    return (
        <ul className='groupProfile-members'>
            {groupMembers.map(user => <li className='groupProfile-member' key={user.id}>
                <NavLink to={myUser?.id === user.id ? '/profile' : `/user/${user.id}`}>
                    <Flex align='center' gap='xl' className='groupProfile-memberContainer'>
                        {user.main_image ? <img className='groupProfile-memberImage' src={user.main_image}/> : <DefaultImage type='user' size='listIcon'/>}
                        <Text fw={700}>{user.surname} {user.name}</Text>
                    </Flex>
                </NavLink>
            </li>)}
        </ul>
    );
};
export default GroupMembers;
