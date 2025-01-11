import React from'react';
import { Image, Text } from '@mantine/core';
import './NewsCard.scss'
import { News } from '../../models/shared';

const NewsCard: React.FC<News> = ({title, description, createdAt, image}) => {
    return (
        <div className='newsCard'>
            <Image width='100%' src={image}/>
            <h3 className='newsCard-title'>
                {title}
            </h3>
            <hr/>
            <Text className='newsCard-text'>
                {description}
            </Text>
            <Text size='sm' className='newsCard-created'>
                {createdAt}
            </Text>
        </div>
    );
};

export default NewsCard;
