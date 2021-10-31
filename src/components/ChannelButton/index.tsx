import React from 'react';

import {ChannelButtonProps} from '../../props/channelButtonProps'

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

const ChannelButton: React.FC<ChannelButtonProps> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
