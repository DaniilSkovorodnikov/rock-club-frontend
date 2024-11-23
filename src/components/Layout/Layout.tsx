import { AppShell, Burger, Flex, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../Logo';
import './Layout.scss';

const Layout: React.FC = () => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{height: 80}}
            navbar={{width:300, breakpoint: 'md', collapsed: {desktop: true, mobile: !opened}}}
            padding={60}
            className='layout'
        >
            <AppShell.Header px='xl' className='layout-header'>
                <Group
                    h='100%'
                >
                    <Burger opened={opened} onClick={toggle} hiddenFrom='md' size='md' color='white'/>
                    <Logo/>
                    <Group
                        justify='flex-end'
                        h='100%'
                        gap='lg'
                        visibleFrom='md'
                        style={{flex: 1}}
                    >
                        <Link to='/'>Оставить заявку</Link>
                        <Link to='/'>График репетиций</Link>
                        <Link to='/'>О рок-клубе</Link>
                        <Link to='/'>Личный кабинет</Link>
                    </Group>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar>
                <Flex
                    py='lg'
                    px='xs'
                    direction='column'
                    gap='lg'
                >
                    <Link to='/'>Оставить заявку</Link>
                    <Link to='/'>График репетиций</Link>
                    <Link to='/'>О рок-клубе</Link>
                    <Link to='/'>Личный кабинет</Link>
                </Flex>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
};
export default Layout;
