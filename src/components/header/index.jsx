import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { AppLogo } from '../app-logo';

export const Header = () => {
  return (
    <header className="header bg-dark">
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/">
            <AppLogo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-lg-0"
              navbarScroll>
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/profile">
                  Профиль
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/login">
                  Войти
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/registration">
                  Регистрация
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
