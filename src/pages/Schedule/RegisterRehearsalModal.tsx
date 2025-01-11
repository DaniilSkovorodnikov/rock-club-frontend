import { Button, Checkbox, Flex, Modal, ModalProps, Text } from '@mantine/core';
import React, { useState } from'react';
import { textStyles } from '../../helpers/const';
import { User } from '../../models/user';
import { useDebounce } from '../../hooks/useDebounce';
import { getUserBySearchParams } from '../../http/groups';
import { DateInput, TimeInput } from '@mantine/dates';
import AsyncSelect from '../../components/Shared/AsyncSelect/AsyncSelect';
import dayjs from 'dayjs';
import { ScheduleItem } from '../../models/shared';

type UserOption = {label: string, value: User}

const RegisterRehearsalModal: React.FC<ModalProps> = (props) => {
    const [rehearsalInfo, setRehearsalInfo] = useState<Partial<ScheduleItem>>({})

    const changeRehearsalInfo = (field: keyof ScheduleItem, value: string | boolean | User | undefined | Date) => {
        setRehearsalInfo(prevState => ({...prevState, [field]: value}));
    }

    const loadOptions = useDebounce(async(search: string, callback: (options: UserOption[]) => void) => {
            const usersResponse = await getUserBySearchParams(search);
            callback(usersResponse.map(user => ({label: `${user.surname} ${user.name}`, value: user})))
        }, 500)

    return (
        <Modal {...props} size='xl' centered withCloseButton={false}>
            <Modal.Header>
                <Text tt='uppercase' fz={textStyles.h2}>Записаться на репетицию</Text>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <AsyncSelect<UserOption>
                        placeholder='Начните вводить'
                        defaultOptions={[]}
                        loadOptions={loadOptions}
                        onChange={opt => changeRehearsalInfo('owner', opt?.value)}
                        value={rehearsalInfo.owner ? {value: rehearsalInfo.owner, label: rehearsalInfo.owner?.name} : undefined}
                    />
                    <Checkbox
                        label='Записаться индивидуально'
                        checked={rehearsalInfo.isIndividual}
                        onChange={(event) => changeRehearsalInfo('isIndividual', event.currentTarget.checked)}
                        mt='md'
                    />
                    <DateInput
                        placeholder='Выберите дату'
                        mt='md'
                        minDate={new Date()}
                        maxDate={dayjs(new Date()).add(1, 'month').toDate()}
                        onChange={value => changeRehearsalInfo('date', value as Date)}
                    />
                    <Flex justify='space-between' gap='md' align='center' mt='md'>
                        <TimeInput
                            flex={1}
                            placeholder='Время начала'
                            onChange={event => changeRehearsalInfo('timeFrom', event.target.value)}
                        />
                        <TimeInput
                            flex={1}
                            placeholder='Время конца'
                            onChange={event => changeRehearsalInfo('timeTo', event.target.value)}
                        />
                    </Flex>
                </form>
                <Flex justify='space-between' align='center' gap='md' mt='md'>
                    <Button color='gray' className='form-submit' flex={1}>Отменить</Button>
                    <Button color='red' className='form-submit' flex={1} onClick={() => console.log(rehearsalInfo)}>Сохранить</Button>
                </Flex>
            </Modal.Body>
        </Modal>
    );
};
export default RegisterRehearsalModal;
