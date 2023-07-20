import { styled } from "styled-components";

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
    position: sticky;
`;
//프로필 이미지 디자인
export const ProfileAvatar = styled.img`
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
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
    border-style: none;
    border-radius: 20px;
    box-shadow: 0 0 4px grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
`;