import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Setting, Sidebar, Header, Page, Dashboard } from '../components';
import UserContainer from './UserContainer';
import SchoolContainer from './SchoolContainer';

const BasicLayout = () => (
  <div className="d-flex">
    <Sidebar />
    <div className="content">
      <Header />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/schools" component={SchoolContainer}/>
      <Route path="/users" component={UserContainer}/>
      <Route path="/setting" component={Setting}/>
    </div>
  </div>
)

export default BasicLayout;
