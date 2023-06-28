import React from 'react';
import styled from 'styled-components'
import { TopBar } from '../components/TopBar';
import { InsertNewComment } from '../components/InsertNewComment';

const MainLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = () => {
    return (
        <MainLayout>
            <TopBar title='혜림이의 방명록'/>
            <InsertNewComment/>
        </MainLayout>
    );
};