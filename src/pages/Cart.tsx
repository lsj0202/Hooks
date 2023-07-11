import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Button from 'react-bootstrap/Button';
import { incrementCount, addItem, removeItem} from "../store";

const Cart = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch()

  console.log(user);
  
  return ( 
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
          <th>추가</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {user.map((ele) => { 
          return (
            <tr key={ele.id}>
              <th>{ele.id}</th>
              <th>{ele.name}</th>
              <th>{ele.count}</th>
              <th>
                <Button onClick={() => {
                  dispatch(incrementCount(ele.id)) 
                }}>+</Button>
              </th>
              <th>
                <Button onClick={() => {
                  dispatch(addItem({id: 3, name: 'Jordan dunk', count: 0}));
                }}>+</Button>
              </th>
              <th>
                <Button onClick={() => {
                  dispatch(removeItem(ele.id));
                }}>-</Button>
              </th>
            </tr>
          )
        })}
      </tbody>
    </Table> 
  );
};

export default Cart;
