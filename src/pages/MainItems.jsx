import React, { useState } from 'react';
import { data } from '../api/data';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const MainItems = () => {
  const router = useNavigate();
  const [sortedData, setSortedData] = useState([...data]);

  const handleSort = () => {
    const sortedArray = [...sortedData];
    sortedArray.sort((a, b) => a.title.localeCompare(b.title)); // title을 기준으로 정렬
    setSortedData(sortedArray);
  };

  return (
    <div className='container'>
      <Button variant="outline-secondary" onClick={handleSort}>정렬</Button>
      <div className='row'>
        {sortedData.map((ele) => (
          <div className='col-md-4' key={ele.id}>
            <img src={ele.imgURI} alt='img' width="80%" />
            <h4>{ele.title}</h4>
            <p>{ele.content}</p>
            <p>{ele.price}</p>
            <Button variant="outline-secondary" onClick={() => {
              router(`/detail/${ele.id}`)
            }}>상품 자세히 보기</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainItems;