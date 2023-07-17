import React from 'react';
import styled from 'styled-components'
import { TopBar } from '../components/TopBar';
import { InsertNewComment } from '../components/InsertNewComment';
import Comments from '../components/Comments';

const MainLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = ({data, setData}) => {
    return (
        <MainLayout>
            <TopBar title='혜림이의 방명록'/>
            <InsertNewComment data={data} setData={setData}/>
            <Comments data={data}/>
        </MainLayout>
    );
};