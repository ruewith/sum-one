import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Header, Footer } from '../../components';

export const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <main className="main py-5">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};
