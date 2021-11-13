import styled from 'styled-components';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UL - User List
// UI - User Info

//Exitem três linhas

export const Grid = styled.div`
  display: grid;

  //largura(width) da coluna
  grid-template-columns: 71px 240px auto 240px;
  //Altura da linha(height)
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

  height: 100vh;
`;
