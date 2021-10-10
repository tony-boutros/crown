import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';
const MenuItem = ({title,imageUrl,history, linkUrl,match}) => (
    <div className='menu-item' onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <img src={imageUrl} alt="" width="50px" height="50px"/>
        <span className='subtitle'>Shop now</span>
    </div>
</div>
)

export default withRouter(MenuItem);