import React from 'react';

import {ServerButtonProps} from '../../props/serverButtonProps'

import Logo from '../../assets/Logo.svg';

import { Button } from './styles';

const ServerButton: React.FC<ServerButtonProps> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;
