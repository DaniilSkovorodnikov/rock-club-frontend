import { Center, Flex, Text } from '@mantine/core';
import React from'react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { textStyles } from '../helpers/const';
import Layout from '../components/Layout/Layout';

const RouterErrorBoundary: React.FC = () => {
    const error = useRouteError()
    let errorMessage = 'Произошла неизвестная ошибка'
    
    if(isRouteErrorResponse(error)){
        if(error.status === 404){
            errorMessage = 'Страница не найдена';
        } 
    } else if(error instanceof Response){
        if(error.status === 400){
            errorMessage = 'Эта страница находится в стадии разработки'
        }
    }

    return (
        <Layout>
            <Center>
                <Flex direction='column' gap='md' align='center'>
                    <Text fz={textStyles.h3}>{errorMessage}</Text>
                    <Link to='/'>Перейти на главную</Link>
                </Flex>
            </Center>
        </Layout>
    );
};
export default RouterErrorBoundary;
