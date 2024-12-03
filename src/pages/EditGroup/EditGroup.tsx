import { Button, Center, Container, Flex, Text } from '@mantine/core';
import React from'react';
import BackButton from '../../components/BackButton/BackButton';
import './EditGroup.scss'
import { useForm } from 'react-hook-form';
import { colors } from '../../helpers/const';
import AsyncSelect from '../../components/AsyncSelect';
import { GroupEditData } from '../../models/group';
import { createGroup } from '../../http/groups';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';

const EditGroup: React.FC = () => {
    const {register, formState: {isSubmitting, isValid}, handleSubmit} = useForm<GroupEditData>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const saveGroup = async(data: GroupEditData) => {
        await createGroup(dispatch, data);
        navigate('/profile')
    }

    return (
      <Center className='groupEdit'>
          <BackButton className='groupEdit-back'/>
          <Flex direction='column' w={{base: '100%', md: '65%'}}>
            <form onSubmit={handleSubmit(saveGroup)}>
                  <Flex direction='column' gap='md'>
                        <input className='form-input' type="text" placeholder='Название *' {...register('name', {required: true})}/>
                        <Container p={0} mt='md' fluid className="form-group">
                            <Text c={colors.grayDark}>Описание</Text>
                            <textarea className='form-textarea' rows={4} {...register('description')}/>
                        </Container>
                        <AsyncSelect
                            options={[]}
                            placeholder='Начните вводить...'
                            noOptionsMessage={() => 'Ничего не найдено'}
                        />
                        <Flex direction='column' gap='sm'>
                            <p>Виктория Дайнеко</p>
                            <p>Марина Сергеевна Абросимова</p>
                        </Flex>
                        <Button className='form-submit' type='submit' color='#DB1403' disabled={isSubmitting || !isValid}>Сохранить</Button>
                  </Flex>
              </form>
          </Flex>
      </Center>
    );
};
export default EditGroup;
