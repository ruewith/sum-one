import { Col, Row } from 'react-bootstrap';
import { LoginForm } from '../../components';

export const LoginPage = () => {
  return (
    <Row className="justify-content-center py-3">
      <Col
        sm={4}
        className="py-3">
        <LoginForm />
      </Col>
    </Row>
  );
};
