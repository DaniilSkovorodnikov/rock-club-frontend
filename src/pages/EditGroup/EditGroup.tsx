import { Button, Center, Container, Flex, Text } from '@mantine/core';
import React, { useEffect, useState } from'react';
import BackButton from '../../components/BackButton/BackButton';
import './EditGroup.scss'
import { useForm } from 'react-hook-form';
import { colors } from '../../helpers/const';
import { GroupEditData } from '../../models/group';
import { createGroup, getGroupById, updateGroupImageRequest, updateGroupRequest } from '../../http/groups';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setGroupToEdit } from '../../store/groupSlice';
import ImageInput from '../../components/Shared/ImageInput/ImageInput';

const EditGroup: React.FC = () => {
    const {groupToEdit} = useAppSelector(state => state.groupSlice)
    const {id} = useParams();
    const {register, formState: {isSubmitting, isValid}, handleSubmit, setValue} = useForm<GroupEditData>();
    const [groupImage, setGroupImage] = useState<File | null>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const saveGroup = async(data: GroupEditData) => {
        if(id){
            await updateGroupRequest(dispatch, data);
            if(groupImage){
                await updateGroupImageRequest(dispatch, id, groupImage);
            }
            navigate(`/profile/group/${id}`);
        } else {
            await createGroup(dispatch, data);
            navigate('/profile')
        }
    }

    useEffect(() => {
        const getGroup = async (id: string) => {
            const group = await getGroupById(id);
            dispatch(setGroupToEdit(group));
        }
        if(id && !groupToEdit){
            getGroup(id)
        }
    }, [id, groupToEdit, dispatch]);

    useEffect(() => {
        return () => { dispatch(setGroupToEdit(null)); }
    }, [dispatch])

    useEffect(() => {
        if(groupToEdit){
            const groupFormKeys: (keyof GroupEditData)[] = ['name', 'description', 'id']
            groupFormKeys.forEach((key) => {
                setValue(key, groupToEdit[key]);
            })
        }
    }, [groupToEdit, setValue])

    return (
      <Center className='groupEdit'>
          <BackButton className='groupEdit-back'/>
          <Flex direction='column' w={{base: '100%', md: '65%'}}>
            {id && <Flex justify='center'>
                <ImageInput defaultImage={groupToEdit?.main_image} onChange={(image) => setGroupImage(image)}/>
            </Flex>}
            <form onSubmit={handleSubmit(saveGroup)}>
                  <Flex direction='column' gap='md'>
                        <input className='form-input' type="text" placeholder='Название *' {...register('name', {required: true})}/>
                        <Container p={0} mt='md' fluid className="form-group">
                            <Text c={colors.grayDark}>Описание</Text>
                            <textarea className='form-textarea' rows={4} {...register('description')}/>
                        </Container>
                        <Button className='form-submit' type='submit' color='#DB1403' disabled={isSubmitting || (!isValid && !groupImage)}>Сохранить</Button>
                  </Flex>
              </form>
          </Flex>
      </Center>
    );
};
export default EditGroup;
