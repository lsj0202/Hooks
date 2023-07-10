import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const router = useNavigate();

  const { data: name, isLoading, isError, error } = useQuery('names', async () => {
    const response = await axios.get('https://codingapple1.github.io/userdata.json');
    return response.data.name;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">ShoppingMall</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {
            router('/Cart');
          }}>Cart</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link>반가워요 {name}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
