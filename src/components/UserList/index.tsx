import React from 'react';

import { Container, Role, User, Avatar } from './styles';

type UserProps ={
  nickname:string
  isBot?:boolean
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) =>{
  return (
    <User>
      <Avatar className={isBot ? 'bot': ''}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const ServerName: React.FC = () => {
  return (
    <Container>
   <Role>Disponível - 1</Role>
   <UserRow nickname="Guilherme Rodz"/>

   <Role>Offline - 18</Role>
   <UserRow nickname="Ciclano da Silva Sauro" isBot/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
   <UserRow nickname="Fulano"/>
    </Container>
  );
};

export default ServerName;
