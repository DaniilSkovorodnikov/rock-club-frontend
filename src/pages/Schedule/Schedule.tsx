import React, { useEffect, useState } from'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'
import ruLocale from '@fullcalendar/core/locales/ru';
import './Schedule.scss'
import { Button, Flex, Text } from '@mantine/core';
import { textStyles } from '../../helpers/const';
import RegisterRehearsalModal from './RegisterRehearsalModal';
import { getWeekPickerLabel, getWeekRange } from '../../helpers/date';
import arrowLeft from '../../assets/arrow-left-week-peeker.svg'
import { getSchedule } from '../../http/schedule';

const Schedule: React.FC = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [week, setWeek] = useState(getWeekRange(new Date()));
    const [schedule, setSchedule] = useState([]);

    const handleChangeWeek = (direction: 'down' | 'up') => {
        const newStartWeekDate = week[0];
        if(direction === 'down') {
            newStartWeekDate.setDate(newStartWeekDate.getDate() - 7);
        } else {
            newStartWeekDate.setDate(newStartWeekDate.getDate() + 7);
        }
        setWeek(getWeekRange(newStartWeekDate));
    }

    useEffect(() => {
        getSchedule(week[0], week[1]).then(res => setSchedule(res));
    }, [week])
    
    return (
        <div className='schedule'>
            <Flex className="schedule-header" align='center' gap='md' mb='xs'>
                <Text className='schedule-title' fz={textStyles.h3}>Расписание репетиций</Text>
                <Flex justify='space-between' align='center' gap='lg' className='schedule-weekPeeker'>
                    <img src={arrowLeft} className='schedule-weekPeeker-arrowLeft' onClick={() => handleChangeWeek('down')}/>
                    <Text fz={textStyles.p}>{getWeekPickerLabel(week[0], week[1])}</Text>
                    <img src={arrowLeft} className='schedule-weekPeeker-arrowRight' onClick={() => handleChangeWeek('up')}/>
                </Flex>
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
                events={schedule.length > 0 ? schedule : [
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
