import React from'react';
import { Image, Text } from '@mantine/core';
import image from '../../assets/news-img.png';
import './NewsCard.scss'

const NewsCard: React.FC = () => {
    return (
        <div className='newsCard'>
            <Image width='100%' src={image}/>
            <h3 className='newsCard-title'>
                ВСТРЕЧАЕМ РОК-БЛОГЕРОВ
            </h3>
            <hr/>
            <Text className='newsCard-text'>
                Anthony Fantano (The Needle Drop) — один из самых известных музыкальных критиков на YouTube, который обсуждает различные жанры, включая рок. Rock Feed — канал на YouTube, посвящённый новостям и обзорам в мире рок-музыки и металл. Loudwire — платформа, которая не только предоставляет новости, но и обзоры альбомов и интервью с рок-артистами. Kerrang! — известный рок-журнал, который также ведёт активную деятельность в интернете, включая блоги и видео. The Rock Critic — блог и канал, где автор анализирует альбомы и даёт рекомендации по музыке. 
                Classic Rock Magazine — журнал, который также имеет онлайн-платформу с новостями и статьями о классическом роке.
            </Text>
            <Text size='sm' className='newsCard-created'>
                12 ноя в 18:00
            </Text>
        </div>
    );
};

export default NewsCard;
