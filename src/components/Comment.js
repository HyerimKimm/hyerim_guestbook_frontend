import React from 'react';
import { styled } from 'styled-components';
import { InputContainer, InsertNewCommentSection, ProfileAvatar } from './InsertNewComment';
import defaultProfile from '../assets/images/profile_default.png'

export const ProfileSection = styled.section`
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const NameBox = styled.div`
    font-size: 0.95rem;
`
export const InfoContainer = styled.section`
    box-sizing: border-box;
    margin: 0px 10px 0px 10px;
    flex-grow: 1;
    max-width: 500px;
    height:15vh;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ContentContainer = styled.p`
    padding: 3px;
    border-radius: 5px;
    border-color: rgba(190,190,190,0.5);
    font-family: 'Noto Sans KR', sans-serif;
`
export const Comment = ({data}) => {
    console.log(data)
    return (
        <InsertNewCommentSection>
            <ProfileSection>
                <ProfileAvatar 
                    aria-label='프로필이미지'
                    src={data.profileImage===null?data.profileImage:defaultProfile}/>
                <NameBox>{data.name}</NameBox>
            </ProfileSection>
            <InfoContainer>
                <ContentContainer>
                    {
                        data.content
                    }
                </ContentContainer>
            </InfoContainer>
        </InsertNewCommentSection>
    );
};