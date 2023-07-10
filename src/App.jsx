import './App.css';
import Header from './components/Header'
import MainItems from './pages/MainItems'
import MainSlide from './pages/MainImg'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import {
  RecoilRoot,
} from 'recoil'; 
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const qeuryClient = new QueryClient();

  const [show, setShow] = useState([]);

  useEffect(() => {
    let outPut = localStorage.getItem('watched');
    outPut = JSON.parse(outPut);
    setShow(outPut || []);
  }, [])

  
  return (
    <QueryClientProvider client={ qeuryClient }>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' onClick={(e) => {e.preventDefault();}} element={ 
              <>
                <MainSlide />
                <MainItems show={ show } />
              </>
            } />
            <Route path='/Cart' element={ 
              <Cart />
            } />
            <Route path='/detail/:id' element={<Detail />} /> {/* useParams에서 추출 하고자 하는 값은 url 과 같아야한다.*/}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
