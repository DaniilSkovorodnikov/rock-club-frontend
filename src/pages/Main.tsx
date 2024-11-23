import { Grid, Flex } from '@mantine/core';
import React from'react';
import NewsCard from '../components/NewsCard/NewsCard';

const Main: React.FC = () => {
  return (
    <div>
        <Grid gutter={{base: 70}}>
            <Grid.Col span={{lg: 4, xs: 12, sm: 6}}>
                <Flex direction='column' gap={60}>
                    <NewsCard/>
                    <NewsCard/>
                </Flex>
            </Grid.Col>
            <Grid.Col span={{lg: 4, sm: 6}} visibleFrom='sm'>
                <NewsCard/>
            </Grid.Col>
            <Grid.Col span={{base: 4}} visibleFrom='lg'>
                <Flex direction='column' gap={60}>
                    <NewsCard/>
                    <NewsCard/>
                </Flex>
            </Grid.Col>
        </Grid>
    </div>
  );
};
export default Main;
