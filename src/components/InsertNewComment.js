import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { postNewGuestbookContent } from '../services/guestbookService'
//기본 프로필이미지
import profileDefault from '../assets/images/profile_default.png'
//전체 입력 박스 디자인
export const InsertNewCommentSection = styled.section`
    box-sizing: border-box;
    margin: 10px;
    padding:15px;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(190,190,190,0.5);
`;
//프로필 이미지 디자인
export const ProfileAvatar = styled.img`
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    cursor: pointer;
`;
//프로필 이미지 input
export const ProfileInput = styled.input`
    display: none;
`;
//이름, 내용을 묶은 section
export const InputContainer = styled.section`
    margin: 0px 10px 0px 10px;
    flex-grow: 1;
    max-width: 500px;
    height:15vh;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
//이름 입력 input 디자인
export const NameInput = styled.input`
    padding: 3px;
    border-style: solid;
    border-radius: 5px;
    border-color: rgba(190,190,190,0.5);
    margin-bottom: 3px;
    font-family: 'Noto Sans KR', sans-serif;
`;
//내용 입력 textarea 디자인
export const ContentInput = styled.textarea`
    padding: 3px;
    border-radius: 5px;
    border-color: rgba(190,190,190,0.5);
    height: 10vh;
    min-height: 1.2rem;
    font-family: 'Noto Sans KR', sans-serif;
`;
//등록하기 버튼 디자인
export const SubmitButton = styled.button`
    height: 2rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
`;
export const InsertNewComment = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [selectedImage, setselectedImage] = useState([profileDefault,null]);
    const fileInput = useRef(null);

    //프로필이미지를 누르면 동작하는 메소드
    const onClickProfile = () => {
        fileInput.current.click();
    }
    //이미지를 변경했을 때 실행됨
    const onChangeProfile = (e) => {
        console.log(e.target.files[0]);
        setselectedImage([URL.createObjectURL(e.target.files[0]),e.target.files[0]]);
    }
    //이름 입력값을 변경할 때 실행됨
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    //내용 입력값을 변경할 때 실행됨
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    //등록버튼 누르면 실행됨
    const onClickButton = async (e) => {
        const response = await postNewGuestbookContent({
            name:name,
            content:content,
            profileImage:selectedImage[1]
        });
        console.log(response);
    }

    return (
        <InsertNewCommentSection alt=''>
            <ProfileAvatar aria-label='프로필이미지' src={selectedImage[0]} onClick={onClickProfile}/>
            <ProfileInput type='file' accept='image/jpg, image/png, image/jpeg' onChange={onChangeProfile} ref={fileInput}/>
            <InputContainer aria-label=''>
                <NameInput aria-label='이름 입력칸' value={name} onChange={onChangeName} placeholder='이름을 입력하세요.'></NameInput>
                <ContentInput aria-label='내용 입력칸' value={content} onChange={onChangeContent} placeholder='내용을 입력하세요.'></ContentInput>
            </InputContainer>
            <SubmitButton aria-label='등록 버튼' onClick={onClickButton}>등록하기</SubmitButton>
        </InsertNewCommentSection>
    );
}