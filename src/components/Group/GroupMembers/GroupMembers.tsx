import React from'react';
import { User } from '../../../models/user';
import { Flex, Text } from '@mantine/core';
import DefaultImage from '../../Shared/DefaultImage/DefaultImage';

interface GroupMembersProps {
    groupMembers: User[]
}

const GroupMembers: React.FC<GroupMembersProps> = ({groupMembers}) => {
    return (
        <ul className='groupProfile-members'>
            {groupMembers.map(user => <li className='groupProfile-member' key={user.id}>
                <Flex align='center' gap='xl'>
                    {user.main_image ? <img className='groupProfile-memberImage' src={user.main_image}/> : <DefaultImage type='user' size='listIcon'/>}
                    <Text fw={700}>{user.surname} {user.name}</Text>
                </Flex>
            </li>)}
        </ul>
    );
};
export default GroupMembers;
