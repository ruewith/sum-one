import { Image } from 'react-bootstrap';
import logo from '../../assets/logo.png';

export const AppLogo = () => {
  return (
    <Image
      src={logo}
      alt="logo"
      width="72"
    />
  );
};
