import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { dataState } from '../recoil/data';

const MainItems = () => {
  const [atomData, setAtomData] = useRecoilState(dataState);
  const router = useNavigate();
  const [sortedData, setSortedData] = useState([...atomData]);
  const [axiosData, setAxiosData] = useState([...atomData]);
  const [isCounter, setIsCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handleSort = () => {
    const sortedArray = [...sortedData];
    sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    setSortedData(sortedArray);
  };

  const server = () => {
    setIsLoading(true);
    if (isCounter === 1) {
      axios
        .get('https://codingapple1.github.io/shop/data2.json')
        .then((response) => {
          const newData = response.data;
          setAxiosData((prev) => [...prev, ...newData]);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
          setIsCounter(isCounter + 1);
        });
    } else if (isCounter === 2) {
      axios
        .get('https://codingapple1.github.io/shop/data3.json')
        .then((response) => {
          const newData = response.data;
          setAxiosData((prev) => [...prev, ...newData]);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
          setIsCounter(isCounter + 1);
        });
    } else {
      alert('더 이상의 신발이 없습니다.');
    }
  };

  useEffect(() => {
    setAtomData(axiosData); // atomData 상태를 업데이트
  }, [axiosData, setAtomData]);

  return (
    <div className="container">
      <Button variant="outline-secondary" onClick={handleSort}>
        정렬
      </Button>
      <Button onClick={server}>더보기</Button>

      {isLoading && <p>Loading...</p>}
      <div className="row">
        {axiosData.map((ele) => (
          <div className="col-md-4" key={ele.id}>
            <img src={`https://codingapple1.github.io/shop/shoes${ele.id + 1}.jpg`} alt="img" width="80%" />
            <h4>{ele.title}</h4>
            <p>{ele.content}</p>
            <p>{ele.price}</p>
            <Button
              variant="outline-secondary"
              onClick={() => {
                router(`/detail/${ele.id}`);
              }}
            >
              상품 자세히 보기
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainItems;
