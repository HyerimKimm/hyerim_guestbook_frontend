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
const NoDataDesign = styled.div`
    box-sizing: border-box;
    margin-top: 10px;
    color: grey
`

const Comments = ({data}) => {
    return (
    <CommentsContainer>
    {
        data.length===0?<NoDataDesign>방명록에 글이 없습니다.</NoDataDesign>
        :data.map((e,idx)=><Comment key={idx} data={e} />)
    }
    </CommentsContainer>
    );
};

export default Comments;