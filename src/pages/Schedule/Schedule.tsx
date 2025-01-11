import React, { useState } from'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'
import ruLocale from '@fullcalendar/core/locales/ru';
import './Schedule.scss'
import { Button, Flex, Text } from '@mantine/core';
import { textStyles } from '../../helpers/const';
import RegisterRehearsalModal from './RegisterRehearsalModal';

const Schedule: React.FC = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    
    return (
        <div className='schedule'>
            <Flex className="schedule-header" justify='space-between' align='center' mb='xs'>
                <Text className='schedule-title' fz={textStyles.h2}>Расписание репетиций</Text>
                <Button onClick={() => setShowAddModal(true)}>Записаться на репетицию</Button>
            </Flex>
            <FullCalendar
                plugins={[ timeGridPlugin ]}
                initialView='timeGridWeek'
                allDaySlot={false}
                headerToolbar={false}
                slotMinTime={'15:00:00'}
                slotMaxTime={'23:00:00'}
                height={512}
                locale={ruLocale}
                slotLabelFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                }}
                events={[
                    {title: 'Металлический напалечник', start: new Date(2025, 0, 9, 16), end: new Date(2025, 0, 9, 19)},
                ]}
            />
            <RegisterRehearsalModal
                opened={showAddModal}
                onClose={() => setShowAddModal(false)}
            />
        </div>
    );
};
export default Schedule;
