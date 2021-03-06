import React from 'react';
import PropTypes from 'prop-types';

import TaskFilter from '../taskFilter/taskFilter';

import './footer.css';

const Footer = ({ itemLeftCount, filter, onFilterChange, onDeleteAllCompletedTask }) => {
  Footer.defaultProps = {
    itemLeftCount: 1,
    filter: 'all',
    onFilterChange: () => {},
    onDeleteAllCompletedTask: () => {},
  };

  Footer.propTypes = {
    itemLeftCount: PropTypes.number,
    filter: PropTypes.string,
    onDeleteAllCompletedTask: PropTypes.func,
    onFilterChange: PropTypes.func,
  };

  return (
    <TaskFilter
      itemLeftCount={itemLeftCount}
      filter={filter}
      onFilterChange={onFilterChange}
      onDeleteAllCompletedTask={onDeleteAllCompletedTask}
    />
  );
};

export default Footer;
