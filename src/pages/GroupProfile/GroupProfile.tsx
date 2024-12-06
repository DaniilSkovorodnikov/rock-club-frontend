import React, { useEffect, useState } from'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Group } from '../../models/group';
import { getGroupById } from '../../http/groups';
import { Button, Center, Flex, Text, UnstyledButton } from '@mantine/core';
import BackButton from '../../components/BackButton/BackButton';
import { colors, textStyles } from '../../helpers/const';
import editIcon from '../../assets/edit-icon.svg'
import './GroupProfile.scss'
import { useAppDispatch } from '../../hooks/redux';
import { setGroupToEdit } from '../../store/groupSlice';
import EditGroupMembers from '../../components/EditGroupMembers/EditGroupMembers';

const GroupProfile: React.FC = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [group, setGroup] = useState<Group | null>(null);
    const [showEditMembersModal, setShowEditMembersModal] = useState(false);

    const handleEditGroup = () => {
        if(group) {
            dispatch(setGroupToEdit(group))
            navigate('edit')
        }
    }

    useEffect(() => {
        const getGroup = async (id: string) => {
            const group = await getGroupById(id);
            setGroup(group)
        }
        if(id){
            getGroup(id)
        }
    }, [id]);

    if(!group){
        return <></>;
    }
    return (
        <Center className='groupProfile'>
          <BackButton className='backButton'/>
          <Flex direction='column' w={{base: '100%', md: '65%'}}>
                <Text className='groupProfile-name' fz={textStyles.h2} ta='center'>
                    {group?.name}
                    <UnstyledButton onClick={handleEditGroup}>
                        <img src={editIcon} alt="Редактировать" className='groupProfile-edit' />    
                    </UnstyledButton>
                </Text>
                <Text ta='center' fz={textStyles.p} c={colors.gray}>Музыкальная группа</Text>
                {group?.description && <Text mt='xl' c={colors.gray}>{group.description}</Text>}
                <Flex justify='space-between' align='flex-end' mt='xl'>
                    <Text fz={textStyles.p} c={colors.gray}>Участники:</Text>
                    <Button onClick={() => setShowEditMembersModal(true)}>Редактировать участников</Button>
                </Flex>
                <ul className='groupProfile-members'>
                    {group.members.map(user => <li className='groupProfile-member'>
                        {user.surname} {user.name}
                    </li>)}
                </ul>
          </Flex>
          <EditGroupMembers
                opened={showEditMembersModal}
                onClose={() => setShowEditMembersModal(false)}
                groupId={group.id}
                groupMemers={group.members}
            />
      </Center>
    );
};
export default GroupProfile;
