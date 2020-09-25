import React, { Component } from 'react';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import './todo-app.css';

// собираем все вместе
export default class TodoApp extends Component {
  minId = 0;

  state = {
	 todoData: [],
    filter: '',
  };

  addFilter = (filterName) => {
    this.setState(() => {
      return {
        filter: filterName,
      };
    });
  };

  addTask = (description) => {
    this.setState(({ todoData }) => {
      const newTask = {
        description,
        done: false,
        id: this.minId ++,
        dataTask: new Date(),
      };

      const newData = [...todoData, newTask];
      return {
        todoData: newData,
      };
    });
  };

  deleteTask = (id) => {
	this.setState(({ todoData }) => {
      const newData = todoData.filter((item) => id !== item.id);
      return {
			todoData: newData,
      };
   });
  };

  onToggleDone = id => {
	this.setState(({ todoData }) => {
      const newData = todoData.map((item) => {
        if (id === item.id) {
          return { ...item, done: !item.done };
        }
        return item;
      });
      return {
			todoData: newData,
      };
    });
};

  deleteСompleted = () => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter((item) => !item.done);
      return {
        todoData: newData,
      };
	 });
  };

   editTask = (id, description) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id );
			const oldTask = todoData[idx];
			const newTask = { ...oldTask, description: description };
			const newData = [...todoData.slice(0, idx), newTask, ...todoData.slice(idx + 1)];
	
	  return {
		todoData: newData,
	  };
	});
 };

  render() {
    const { todoData, filter } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <section className="todoapp">
         <header className="header">
         	<h1>todos</h1>
         	<NewTaskForm addTask={this.addTask} />
         </header>
		   <TaskList 
				todos={todoData}
				filter={filter}
				deleteTask={this.deleteTask}
				onToggleDone={this.onToggleDone}
				editTask={this.editTask}
			/>
		   <Footer 
				todoCount={todoCount}
				deleteСompleted={this.deleteСompleted}
				addFilter={this.addFilter}
			/>
      </section>
    );
  }
}
