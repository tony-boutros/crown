import React from 'react';
import './menu-item.scss';
const MenuItem = ({title,imageUrl}) => (
    <div className='menu-item'>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <img src={imageUrl} alt="" width="50px" height="50px"/>
        <span className='subtitle'>Shop now</span>
    </div>
</div>
)

export default MenuItem;