import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from './PageHeader';

const Page = ({ children }) => (
  <div className="p-4">
    <PageHeader />
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node
}

export default Page;
