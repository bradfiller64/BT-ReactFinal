import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import Logo from './images/logo.jpg'

function Home() {
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <img id="logo" style={{ width: 50, height: 50, borderRadius: '25px', boxShadow: '0px 0px 20px green' }} src={Logo} alt="logo" />
                    <h4 id="LoFi">LoFi Games</h4>
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
                    </Nav>
                </Container>
            </Navbar>
            <Stack gap={3} className='col-md-10 mx-auto mt-3'>
                <Outlet />
            </Stack>
        </>
    );
}

export default Home