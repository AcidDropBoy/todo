import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

// NewTaskForm - форма для добавления
export default class NewTaskForm extends Component {
  state = {
    description: '',
  };

  static defaultProps = {
    addTask: () => {},
  };

  static propTypes = {
    addTask: PropTypes.func,
  };

  inputValue = (description) => this.setState({ description });

  render() {
    const { description } = this.state;
	 const { addTask } = this.props;

    return (
      <form onSubmit={(event) => {
			event.preventDefault();
			addTask(description);
			this.setState(() => {
			  return {
				description: '',
			  };
			});
		 }}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(event) => this.inputValue(event.target.value)}
          value={description}
        />
      </form>
    );
  }
}
