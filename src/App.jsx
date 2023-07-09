import './App.css';
import Header from './components/Header'
import MainItems from './pages/MainItems'
import MainSlide from './pages/MainImg'
import Detail from './pages/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'; 

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ 
            <>
              <MainSlide />
              <MainItems />
            </>
          } />
          <Route path='/Cart' element={ 
            <div>장바구니 페이지</div>
          } />
          <Route path='/detail/:id' element={<Detail />} /> {/* useParams에서 추출 하고자 하는 값은 url 과 같아야한다.*/}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
