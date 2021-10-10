import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss'
import Logo from '../../assets/MassoudArtboard-1.png';

const Header = () => (

     <div className='header'>
     <Link className='logo-container' to='/'>
     <img src={Logo} width="90px" alt="" />
     </Link>
     <div className='options'>
       <Link className='option' to='/shop'>
         SHOP
       </Link>
       <Link className='option' to='/shop'>
         CONTACT
       </Link>
       <Link className='option' to='/signin'>
         Sign In
       </Link>
     </div>
   </div>
)
export default Header;