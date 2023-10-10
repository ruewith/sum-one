import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userSecletor } from '../../store';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../store/userSlice';

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(userSecletor);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="profile">
      <h2 className="h2 p-3 mb-3 bg-light border rounded">Страница профиля: {user.name}</h2>
      <div>
        <Button
          variant="outline-primary"
          onClick={logoutHandler}>
          Выйти
        </Button>
      </div>
    </div>
  );
};
