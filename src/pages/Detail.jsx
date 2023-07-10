import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataState } from '../recoil/data';
import Nav from 'react-bootstrap/Nav';

const Detail = () => {
  const atomData = useRecoilValue(dataState);
  const [fade, setFade] = useState('');

  const { id } = useParams();
  const productId = Number(id);
  const [modal, setModal] = useState(true);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(false);
    }, 2000);
    const divFade = setTimeout(() => {
      setFade('end')
    }, 100)

    let outPut = localStorage.getItem('watched')
    outPut = JSON.parse(outPut)
    outPut.push(productId)

    //Set으로 바꿨다가 다시 array로 만들기
    outPut = new Set(outPut)
    outPut = Array.from(outPut)
    localStorage.setItem('watched', JSON.stringify(outPut))

  }, []);

  return (
    <div className={`start ${fade}`}>
      {modal ? <Alert>2초 이내 구매시 할인</Alert> : null}
      <div className="col-md-4" key={atomData[productId].id}>
        <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} alt="img" width="150%" />
        <h4>{atomData[productId].title}</h4>
        <p>{atomData[productId].content}</p>
        <p>{atomData[productId].price}</p>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {
            setNumber(0);
          }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => {
            setNumber(1);
          }}>버튼2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => {
            setNumber(2);
          }}>버튼3</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent number={number} atomData={[...atomData]} />
    </div>
  );
};

const TabContent = (props) => {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, [props.number]);

  return (
    <div className={`start ${fade}`}>
      {
        [ <div>
            <p>{props.atomData[0].id + 1}</p>
            <p>{props.atomData[0].title}</p>
            <p>{props.atomData[0].content}</p>
          </div>,
          <div>
            <p>{props.atomData[1].id + 1}</p>
            <p>{props.atomData[1].title}</p>
            <p>{props.atomData[1].content}</p>
          </div>,
          <div>
            <p>{props.atomData[2].id + 1}</p>
            <p>{props.atomData[2].title}</p>
            <p>{props.atomData[2].content}</p>
          </div>][props.number]}
    </div>
  );
};

export default Detail;
