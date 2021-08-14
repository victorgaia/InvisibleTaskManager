import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Logo from '../../assets/logo5.png';

const Header: React.FC = () => {
  return(
      <Image style={{ marginTop: 90 }}
        source={Logo}
      />
  )
}

export default Header;