import axios from 'axios';
const rootUrl = 'http://localhost:4999/guestbook';
 
export const postNewGuestbookContent = async ({name,content,profileImage}) => {
    const responseData = await axios.post(rootUrl, 
    {
        name: name,
        content: content,
        profileImage: profileImage
    })
    return responseData;
}

export const getAllGuestbookContents = async () => {
    const response = await axios.get(rootUrl);
    return response.data;
}