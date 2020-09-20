import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import EditTask from '../edit-task/edit-task';
import './task.css';

// Task - одна задача
export default class Task extends Component {
	state = {
		onEditTask: false
	}

  static defaultProps = {
    done: false,
    onToggleDone: () => {},
	 deleteTask: () => {},
	 editTask: () => {},
    description: 'Тестовый Task',
    dataTask: new Date(),
  };

  static propTypes = {
	 id: PropTypes.number.isRequired,
    done: PropTypes.bool,
    onToggleDone: PropTypes.func,
	 deleteTask: PropTypes.func,
	 editTask: PropTypes.func,
    description: PropTypes.string,
    dataTask: PropTypes.instanceOf(),
  };

  enableEditTask = () => {
	const { onEditTask } = this.state;
	this.setState({
		onEditTask: !onEditTask,
	});
 };

  render() {
	 const { id, description, deleteTask, onToggleDone, done, dataTask, editTask } = this.props;
	 const { onEditTask } = this.state;

    let classNames = 'todo-item';

    if (done) {
      classNames += ' completed';
    }

    return (
		<div>
		{!onEditTask ? (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} />
          <label>
            <span className="description">{description}</span>
            <span className="created">
              created{' '}
              {formatDistanceToNow(dataTask, {
                includeSeconds: true,
              })}
            </span>
          </label>
          <button type="button" className="icon icon-edit" onClick={this.enableEditTask} aria-label="Button" />
          <button type="button" className="icon icon-destroy" onClick={deleteTask} aria-label="Button" />
        </div>
		</li>
		) : null}
		<EditTask
          id={id}
          onEditTask={onEditTask}
          description={description}
          editTask={editTask}
          enableEditTask={this.enableEditTask}
        />
      </div>
    );
  }
}
