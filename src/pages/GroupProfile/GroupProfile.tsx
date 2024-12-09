import React, { useEffect, useState } from'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getGroupById } from '../../http/groups';
import { Button, Center, Flex, Text, UnstyledButton } from '@mantine/core';
import BackButton from '../../components/BackButton/BackButton';
import { colors, textStyles } from '../../helpers/const';
import editIcon from '../../assets/edit-icon.svg'
import './GroupProfile.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCurrentActiveGroup, setGroupToEdit } from '../../store/groupSlice';
import EditGroupMembers from '../../components/Group/EditGroupMembers/EditGroupMembers';
import GroupMembers from '../../components/Group/GroupMembers/GroupMembers';
import DefaultImage from '../../components/Shared/DefaultImage/DefaultImage';

const GroupProfile: React.FC = () => {
    const {id} = useParams();
    const {currentActiveGroup: group} = useAppSelector(state => state.groupSlice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [membersEditMode, setEditMembersMode] = useState(false);

    const handleEditGroup = () => {
        if(group) {
            dispatch(setGroupToEdit(group))
            navigate('edit')
        }
    }

    useEffect(() => {
        const getGroup = async (id: string) => {
            const group = await getGroupById(id);
            dispatch(setCurrentActiveGroup(group))
        }
        if(id){
            getGroup(id)
        }
    }, [dispatch, id]);

    useEffect(() => {
        return () => {
            dispatch(setCurrentActiveGroup(null))
        };
    }, [dispatch])

    if(!group){
        return <></>;
    }
    return (
        <Center className='groupProfile'>
          <BackButton className='backButton'/>
          <Flex direction='column' w={{base: '100%', md: '65%'}}>
                {group.main_image ? <img className='groupProfile-image' src={group.main_image}/> : <DefaultImage type="group" size="avatar" className='groupProfile-image'/>}
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
                    {!membersEditMode && <Button onClick={() => setEditMembersMode(true)}>Редактировать участников</Button>}
                </Flex>
                {membersEditMode 
                    ? <EditGroupMembers groupId={group.id} groupMembers={group.members} toReadMode={() => setEditMembersMode(false)}/>
                    : <GroupMembers groupMembers={group.members}/>
                }
          </Flex>
      </Center>
    );
};
export default GroupProfile;
