import React, { useRef, useState } from 'react';
import { getAllGuestbookContents, postNewGuestbookContent } from '../services/guestbookService'
//기본 프로필이미지
import profileDefault from '../assets/images/profile_default.png'
import { InsertNewCommentSection, ProfileAvatar, ProfileInput, InputContainer, NameInput, ContentInput, SubmitButton } from './InsertNewComment.style';
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../services/firebase';

export const InsertNewComment = ({data, setData}) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [selectedImage, setSelectedImage] = useState([profileDefault,null]);
    const fileInput = useRef(null);

    //프로필이미지를 누르면 동작하는 메소드
    const onClickProfile = () => {
        fileInput.current.click();
    }
    //이미지를 변경했을 때 실행됨
    const onChangeProfile = (e) => {
        setSelectedImage([URL.createObjectURL(e.target.files[0]),e.target.files[0]]);
    }
    //이름 입력값을 변경할 때 실행됨
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    //내용 입력값을 변경할 때 실행됨
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    //입력란 초기화
    const inputClear = (e) => {
        setName('');
        setContent('');
        setSelectedImage([profileDefault,null]);
    }
    //등록버튼 누르면 실행됨
    const onClickButton = async (e) => {
        const file = selectedImage[1];

        if(file!==null && file!==undefined) {
            const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
            const uploadTask = uploadBytes(storageRef,file);

            uploadTask.then((snapshot)=>{
                getDownloadURL(snapshot.ref).then((downloadURL)=>{
                    postNewGuestbookContent({
                        name:name,
                        content:content,
                        profileImage: downloadURL
                    })
                    .then(()=>{
                        getAllGuestbookContents().then((res)=>{
                            setData([ ...res.data ])
                            inputClear();
                        })
                    });
                })
            })
        }
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