import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../tasks-filter/tasks-filter';
import './footer.css';

// Footer - футер с информацией и кнопками

const Footer = ({ todoCount, deleteСompleted, addFilter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter addFilter={addFilter} />
      <button type="button" className="clear-completed" onClick={deleteСompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  addFilter: () => {},
  deleteСompleted: () => {},
  todoCount: 0,
};

Footer.propTypes = {
  addFilter: PropTypes.func,
  deleteСompleted: PropTypes.func,
  todoCount: PropTypes.number,
};

export default Footer;
