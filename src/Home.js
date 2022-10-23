import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { Link, Outlet } from 'react-router-dom';
import Logo from './images/logo.jpg';


function Home() {
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Container >
                    <Navbar.Brand href="/">
                        <img id="logo"
                            alt='Lofi-Logo'
                            style={{ width: 50, height: 50, borderRadius: '25px', boxShadow: '0px 0px 20px green' }}
                            src={Logo}
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{ color: 'rgb(98, 255, 98)' }}>LoFi Games</span>
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
                            View All
                        </Link>
                        <Link to='/create-product' className='nav-link'>
                            New Product
                        </Link>
                    </Nav>
                    <SearchBar />
                </Container>
            </Navbar>
            <Stack gap={3} className='col-md-10 mx-auto mt-3'>
                <Outlet />
            </Stack>
        </>
    );
}

function SearchBar() {
    return (
        <form action="/Search" method="get">
            <input type="text" name="query" placeholder="Search..." style={{ color: 'black' }} />
        </form>
    );
}

export default Home