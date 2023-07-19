import React from 'react';
import { Comment } from './Comment';
import { styled } from 'styled-components';

const CommentsContainer = styled.main`
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Comments = ({data}) => {
    return (
    <CommentsContainer>
    {
        data.map((e,idx)=><Comment key={idx} data={e} />)
    }
    </CommentsContainer>
    );
};

export default Comments;