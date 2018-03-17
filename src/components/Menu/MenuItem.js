import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Style will change based on orientation, vertical & horizontal
 * */

const MenuItem = ({ name, linkTo, iconType }) => (
  <li>
    <Link to={linkTo}><i className={`fa fa-${iconType}`}>   {name}</i></Link>
  </li>
);

export default MenuItem;
