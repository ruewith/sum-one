import { Col, Row } from 'react-bootstrap';
import { RegisterForm } from '../../components';

export const RegisterPage = () => {
  return (
    <Row className="row justify-content-center py-3">
      <Col
        sm={4}
        className="py-3">
        <RegisterForm />
      </Col>
    </Row>
  );
};
