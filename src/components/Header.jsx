import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const router = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">ShoppingMall</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {
            router('/Cart')
          }}>Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;