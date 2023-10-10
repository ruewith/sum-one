import { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { MainLayout } from '../layouts/main-layout';
import { HomePage, ProfilePage, LoginPage, RegisterPage } from '../pages';

import { DataContext } from '..';
import { authSecletor } from '../store';
import { setUser } from '../store/userSlice';

const App = () => {
  const dispatch = useDispatch();

  const users = useContext(DataContext);
  const isAuth = useSelector(authSecletor);

  useEffect(() => {
    const loginedUser = localStorage.getItem('userId');

    if (loginedUser) {
      const user = users.find((u) => u.id === +loginedUser);
      dispatch(setUser(user));
    }
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/profile"
          element={isAuth ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/registration"
          element={!isAuth ? <RegisterPage /> : <Navigate to="/profile" />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
