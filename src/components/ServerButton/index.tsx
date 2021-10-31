import React from 'react'

import {Props} from '../../props/serverButtonProps'

import {Button} from './styles'
import Logo from '../../assets/Logo.svg'

export const ServerButton = ({selected,
  isHome,
  hasNotifications,
  mentions}:Props) =>{
return (<Button
  isHome={isHome}
  hasNotifications={hasNotifications}
  mentions={mentions}
  className={selected ? 'active' : ''}
>
{isHome && <img src={Logo} alt="discord"/>}
</Button>)
}

export default ServerButton