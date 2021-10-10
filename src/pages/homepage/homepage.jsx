import React from 'react';
import {Link} from 'react-router-dom';
import Directory from '../../components/directory/directory';
import  './homepage.scss';
import Logo from '../../assets/MassoudArtboard-1.png';

const HomePage = () => (
    <div className='homepage'>
   
       <div className="wrap">
       <img src={Logo} width="220px" alt="" />
         
            <Link className="button" to="/shop">Shop now</Link>
         
       </div>
    </div>
)


export default HomePage;