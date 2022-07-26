import  { useState, useEffect} from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/img/logo.webp'
import navIcon1 from '../assets/img/nav-icon1.webp'
import navIcon2 from '../assets/img/github-brands.webp'
import navIcon3 from '../assets/img/twitter-brands.webp'


export const NavBar = () => {

    const [ activeLink, setActiveLink] = useState('home');
    const [ scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
        // const onScroll = () => {
        //     if (window.scrollY > 50) {
        //       setScrolled('scrolled');
        //     } else if (window.scrollY > 1230) {
        //       setScrolled('blue');
        //     } else if (window.scrollY > 1630) {
        //       setScrolled('black');
        //     } else if (window.scrollY > 2380) {
        //       setScrolled('blue');
        //     } else if (window.scrollY > 3580) {
        //       setScrolled('black');
        //     }
        //   }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    },[]);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
              <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                  <Navbar.Brand href="#home">
                      <img className='logo' src={logo} alt='logo'></img>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav">
                      <span className='navbar-toggler-icon'></span>
                  </Navbar.Toggle>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                      <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                      <Nav.Link href="#tools" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tools')}>Tools</Nav.Link>
                      <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                      <Nav.Link href="#certificates" className={activeLink ==='certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')}>Certificates</Nav.Link> 
                    </Nav>
                    <span className='navbar-text'>
                      <div className='social-icons'>
                          <a href='https://www.linkedin.com/in/tunchahmet/'><img src={navIcon1} alt=''></img></a> 
                          <a href='https://github.com/TuncAhmet'><img src={navIcon2} alt=''></img></a> 
                          <a href='https://twitter.com/tunchahmet'><img src={navIcon3} alt=''></img></a> 
                      </div>
                      <a href='#contact'>
                        <button className='vvd'><span>Contact Me</span></button>
                      </a>
                      
                    </span>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            );
          }