import axios from 'axios';
const rootUrl = 'http://localhost:4999/guestbook';

export const postNewGuestbookContent = async ({name,content,profileImage}) => {
    const url = rootUrl;
    const data = {
        name: name,
        content: content,
        profileImage: profileImage
    };
    const response = await axios.post(url, data);
    console.log(response.data);
}

export const getAllGuestbookContents = async () => {

}