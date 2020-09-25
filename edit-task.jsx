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

  newEdit = (event) => {
	event.preventDefault();
	this.props.editTask(this.props.id, this.state.newDescription);
	this.props.enableEditTask();
 }

  valueForm = (newDescription) => this.setState({ newDescription });

  render() {
    const { onEditTask } = this.props;
    const { newDescription } = this.state;
    return (
      <div>
        {onEditTask ? (
          <li className="editing">
            <form
              onSubmit={this.newEdit}
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