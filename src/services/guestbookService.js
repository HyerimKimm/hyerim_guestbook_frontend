import axios from 'axios';
const rootUrl = 'http://localhost:4999/guestbook';
 
export const postNewGuestbookContent = async ({name,content,profileImage}) => {
    const url = rootUrl;
    
}

export const getAllGuestbookContents = async () => {
    const url = rootUrl;
    const response = await axios.get(url);
    return response.data;
}