import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { Link, Outlet } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Logo from './images/logo.jpg';
import './styles/Home.css'


function Home() {
    return (
        <>
            <Navbar id='main-navbar' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="/">
                        <img id="logo" style={{ width: 50, height: 50, borderRadius: '25px', boxShadow: '0px 0px 20px green' }} src={Logo} alt="logo" />
                        <h4 id="LoFi">LoFi Games</h4>
                    </Navbar.Brand>
                </Container>
                <Container>
                    <Nav className='me-auto'>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                        <Link to='/about' className='nav-link'>
                            About Us
                        </Link>
                        <Link to='/products' className='nav-link'>
                            Products
                        </Link>
                        <Link to='/create-product' className='nav-link'>
                            New Product
                        </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="primary">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <Stack gap={3} className='col-md-10 mx-auto mt-3'>
                <Outlet />
            </Stack>
        </>
    );
}

export default Home