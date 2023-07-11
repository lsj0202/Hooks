import './App.css';
import Header from './components/Header';
import MainItems from './pages/MainItems';
import MainSlide from './pages/MainImg';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  const [show, setShow] = useState<string[]>([]);

  useEffect(() => {
    const outPut = localStorage.getItem('watched');
    if (outPut) {
      const parsedOutput = JSON.parse(outPut);
      setShow(parsedOutput);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainSlide />
                  <MainItems show={show} />
                </>
              }
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
