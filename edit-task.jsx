import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditTask extends Component {
  state = {
    newDescription: '',
  };

  static defaultProps = {
	description: '',
    editTask: () => {},
    enableEditTask: () => {},
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    onEditTask: PropTypes.bool.isRequired,
    editTask: PropTypes.func,
    enableEditTask: PropTypes.func,
  };

  componentDidMount() {
    const { description } = this.props;
    this.setState({ newDescription: description });
  }

  valueForm = (newDescription) => this.setState({ newDescription });

  render() {
    const { id, onEditTask, editTask, enableEditTask } = this.props;
    const { newDescription } = this.state;
    return (
      <div>
        {onEditTask ? (
          <li className="editing">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                editTask(id, newDescription);
                enableEditTask();
              }}
            >
              <input
                type="text"
                className="edit"
                value={newDescription}
                onChange={(event) => this.valueForm(event.target.value)}
              />
            </form>
          </li>
        ) : null}
      </div>
    );
  }
}