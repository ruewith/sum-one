import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

import { DataContext } from '../../index';

import { AppLogo } from '../app-logo';

export const RegisterForm = () => {
  const users = useContext(DataContext);
  const navigate = useNavigate();

  const [registerName, setRegisterName] = useState('');
  const [registerLogin, setRegisterLogin] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regPassVerify, setRegPassVerify] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const [passed, setPassed] = useState(false);

  const regiserSumbit = (event) => {
    setErrorMessage('');
    event.preventDefault();
    const candidate = users.find((u) => u.login === registerLogin);

    if (candidate) {
      setErrorMessage('Пользователь с таким логином уже зарегистрирован');
    }

    if (regPass !== regPassVerify) {
      setErrorMessage('Введенные пароли не совпадают');
    }

    if (!candidate && regPass && regPassVerify && regPass === regPassVerify) {
      setPassed(true);
    }
    setValidated(true);
  };

  return (
    <Form
      noValidate
      onSubmit={regiserSumbit}
      validated={validated}>
      <div className="d-flex justify-content-center">
        <AppLogo />
      </div>
      <h1 className="h2 mb-3 text-center fw-normal">Регистрация</h1>

      <Form.Group className="form-floating mb-3">
        <Form.Control
          type="text"
          id="registerName"
          placeholder="Имя"
          value={registerName}
          onChange={(event) => setRegisterName(event.target.value)}
          required
        />
        <Form.Label htmlFor="registerName">Имя</Form.Label>
        <Form.Control.Feedback type="invalid">Поле обязательно</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-floating mb-3">
        <Form.Control
          type="text"
          id="registerLogin"
          placeholder="Логин"
          value={registerLogin}
          onChange={(event) => setRegisterLogin(event.target.value)}
          required
        />
        <Form.Label htmlFor="registerLogin">Логин</Form.Label>
        <Form.Control.Feedback type="invalid">Поле обязательно</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-floating mb-3">
        <Form.Control
          type="password"
          id="regPass"
          placeholder="Пароль"
          value={regPass}
          onChange={(event) => setRegPass(event.target.value)}
          required
        />
        <Form.Label htmlFor="regPass">Пароль</Form.Label>
        <Form.Control.Feedback type="invalid">Поле обязательно</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-floating mb-3">
        <Form.Control
          type="password"
          id="regPassVerify"
          placeholder="Повторение пароля"
          value={regPassVerify}
          onChange={(event) => setRegPassVerify(event.target.value)}
          required
        />
        <Form.Label htmlFor="regPassVerify">Повторение пароля</Form.Label>
        <Form.Control.Feedback type="invalid">Поле обязательно</Form.Control.Feedback>
      </Form.Group>

      {errorMessage && (
        <Alert
          className="mt-3"
          variant="danger">
          {errorMessage}
        </Alert>
      )}

      {passed ? (
        <>
          <Alert
            className="mt-3"
            variant="success">
            Вы успешно зарегистрированы
          </Alert>
          <Button
            variant="success"
            className="w-100 py-3"
            onClick={() => navigate('/login')}>
            Вход
          </Button>
        </>
      ) : (
        <Button
          className="w-100 py-3"
          type="submit">
          Зарегистрироваться
        </Button>
      )}
    </Form>
  );
};
