import { Grid, Flex } from '@mantine/core';
import React from'react';
import NewsCard from '../components/NewsCard/NewsCard';
import { News } from '../models/shared';
import news0 from '../assets/news-img.png';
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import news4 from '../assets/news4.jpg';

const Main: React.FC = () => {
  return (
    <div>
        <Grid gutter={{base: 70}}>
            <Grid.Col span={{lg: 4, xs: 12, sm: 6}}>
                <Flex direction='column' gap={60}>
                    <NewsCard {...news[0]}/>
                    <NewsCard {...news[1]}/>
                </Flex>
            </Grid.Col>
            <Grid.Col span={{lg: 4, sm: 6}} visibleFrom='sm'>
                <NewsCard {...news[2]}/>
            </Grid.Col>
            <Grid.Col span={{base: 4}} visibleFrom='lg'>
                <Flex direction='column' gap={60}>
                    <NewsCard {...news[3]}/>
                    <NewsCard {...news[4]}/>
                </Flex>
            </Grid.Col>
        </Grid>
    </div>
  );
};
export default Main;

const news: News[] = [
    {
        title: "Встречаем рок-блогеров",
        description: "Anthony Fantano (The Needle Drop) — один из самых известных музыкальных критиков на YouTube, который обсуждает различные жанры, включая рок. Rock Feed — канал на YouTube, посвящённый новостям и обзорам в мире рок-музыки и металл. Loudwire — платформа, которая не только предоставляет новости, но и обзоры альбомов и интервью с рок-артистами. Kerrang! — известный рок-журнал, который также ведёт активную деятельность в интернете, включая блоги и видео. The Rock Critic — блог и канал, где автор анализирует альбомы и даёт рекомендации по музыке. Classic Rock Magazine — журнал, который также имеет онлайн-платформу с новостями и статьями о классическом роке.",
        createdAt: '12 нояб. 2024',
        image: news0
    },
    {
        title: "Рок-группы в эпоху интернета",
        description: "В новом исследовании рассматривается влияние цифровых платформ на популярность рок-групп. С увеличением использования стриминговых сервисов, как Spotify и Apple Music, многие коллективы нашли новые способы взаимодействия с аудиторией. Как интернет изменил жанр?",
        createdAt: '15 нояб. 2024',
        image: news1
    },
    {
        title: "История вокала в рок-названиях",
        description: "С каждым десятилетием меняется как сама музыка, так и её исполнители. В новом блоге музыковеды рассказывают о том, как на протяжении последних 50 лет вокал в рок-группах изменялся и какие знаменитые вокалисты оставили свой след в истории.",
        createdAt: '24 нояб. 2024',
        image: news2
    },
    {
        title: "Рок-наследие: как продолжает жить классический рок",
        description: "Несмотря на бурное развитие новых музыкальных направлений, классический рок продолжает вдохновлять новых поколений музыкантов. В интервью с молодыми рок-группами обсуждается влияние старых мастеров и то, как они используют наследие легендарных коллективов в своей музыке.",
        createdAt: '14 дек. 2024',
        image: news3
    },
    {
        title: "Рок и технологии: грядущее и завтра",
        description: "Музыка и технологии развиваются стремительно. Ожидаются новые инструменты и программы, которые помогут музыкантам в записи альбомов и живых выступлениях. Как виртуальная реальность и искусственный интеллект изменят мир рок-музыки в ближайшие годы?",
        createdAt: '11 дек. 2024',
        image: news4
    }
];
