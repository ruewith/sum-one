import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

import { AppLogo } from '../app-logo';
import { DataContext } from '../../index';
import { setUser } from '../../store/userSlice';

export const LoginForm = () => {
  const users = useContext(DataContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [validated, setValidated] = useState(false);

  const loginSumbit = (event) => {
    event.preventDefault();
    setErrorMessage('');
    const candidate = users.find((u) => u.login === login);

    if (login && password) {
      if (!candidate || candidate.password !== password) {
        setErrorMessage('Имя пользователя или пароль введены не верно');
      } else {
        localStorage.setItem('userId', candidate.id);
        dispatch(setUser(candidate));
        navigate('/profile');
      }
    }
    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={loginSumbit}>
      <div className="d-flex justify-content-center">
        <AppLogo />
      </div>
      <h1 className="h2 mb-3 text-center fw-normal">Вход</h1>

      <Form.Group className=" form-floating mb-3">
        <Form.Control
          type="text"
          required
          id="login"
          placeholder="Логин"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Form.Label htmlFor="login">Логин</Form.Label>
        <Form.Control.Feedback type="invalid">Поле обязательно</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-floating mb-3">
        <Form.Control
          type="password"
          required
          id="password"
          placeholder="Пароль"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Form.Label htmlFor="password">Пароль</Form.Label>
        <Form.Control.Feedback type="invalid">Поле обязательно</Form.Control.Feedback>
      </Form.Group>

      {errorMessage && (
        <Alert
          className="mt-3"
          variant="danger">
          {errorMessage}
        </Alert>
      )}

      <Button
        className="w-100 py-3"
        type="submit">
        Войти
      </Button>
    </Form>
  );
};
