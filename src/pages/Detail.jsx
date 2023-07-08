import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../api/data';

const Detail = () => {
  const { id } = useParams();
  const productId = Number(id);

  return (
    <div>
      <div className='col-md-4' key={data.id}>
        <img src={data[productId].imgURI} alt='img' width='150%' />
        <h4>{data[productId].title}</h4>
        <p>{data[productId].content}</p>
        <p>{data[productId].price}</p>
      </div>
    </div>
  );
};

export default Detail;
