import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { useRecoilValue } from 'recoil';
import { dataState } from '../recoil/data';
import Nav from 'react-bootstrap/Nav';

interface AtomData {
  id: number;
  title: string;
  content: string;
  price: number;
}

const Detail: React.FC = () => {
  const atomData = useRecoilValue<AtomData[]>(dataState);
  const [fade, setFade] = useState<string>('');

  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const [modal, setModal] = useState<boolean>(true);
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(false);
    }, 2000);
    const divFade = setTimeout(() => {
      setFade('end');
    }, 100);

    let outPut: number[] = localStorage.getItem('watched')
      ? JSON.parse(localStorage.getItem('watched')!)
      : [];
    outPut.push(productId);

    // Set으로 바꿨다가 다시 array로 만들기
    outPut = Array.from(new Set(outPut));
    localStorage.setItem('watched', JSON.stringify(outPut));
  }, []);

  

  return (
    <div className={`start ${fade}`}>
      {modal ? <Alert>2초 이내 구매시 할인</Alert> : null}
      <div className="col-md-4" key={atomData[productId].id}>
        <img
          src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`}
          alt="img"
          width="150%"
        />
        <h4>{atomData[productId].title}</h4>
        <p>{atomData[productId].content}</p>
        <p>{atomData[productId].price}</p>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setNumber(0);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setNumber(1);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setNumber(2);
            }}
          >
            버튼3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent number={number} atomData={atomData} />
    </div>
  );
};

interface TabContentProps {
  number: number;
  atomData: AtomData[];
}

const TabContent: React.FC<TabContentProps> = ({ number, atomData }) => {
  const [fade, setFade] = useState<string>('');

  useEffect(() => {
    const a = setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, [number]);

  return (
    <div className={`start ${fade}`}>
      {[
        <div>
          <p>{atomData[0].id + 1}</p>
          <p>{atomData[0].title}</p>
          <p>{atomData[0].content}</p>
        </div>,
        <div>
          <p>{atomData[1].id + 1}</p>
          <p>{atomData[1].title}</p>
          <p>{atomData[1].content}</p>
        </div>,
        <div>
          <p>{atomData[2].id + 1}</p>
          <p>{atomData[2].title}</p>
          <p>{atomData[2].content}</p>
        </div>,
      ][number]}
    </div>
  );
};

export default Detail;
