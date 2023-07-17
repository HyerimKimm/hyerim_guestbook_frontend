import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './pages/Main';
import { useEffect, useState } from "react";
import { getAllGuestbookContents } from "./services/guestbookService";

function App() {
  const [data, setData] = useState([]);

  const getData = async ()=>{
    let res = await getAllGuestbookContents();
    setData(res.data);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main data={data} setData={setData}/>}/>
        <Route path='*' element={<Main data={data} setData={setData}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
