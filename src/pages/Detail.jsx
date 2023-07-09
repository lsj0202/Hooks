import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataState } from '../recoil/data';

const Detail = () => {
  const [atomData, setAtomData] = useRecoilState(dataState);

  const { id } = useParams();
  const productId = Number(id);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  const product = atomData.find((item) => item.id === productId);

  return (
    <div>
      {modal ? <Alert>2초 이내 구매시 할인</Alert> : null}
      <div className="col-md-4" key={product.id}>
        <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} alt="img" width="150%" />
        <h4>{product.title}</h4>
        <p>{product.content}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Detail;
