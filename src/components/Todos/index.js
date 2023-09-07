import { Component } from "react";
import FormArea from "./Form";
import TodoItem from "./Item";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    this.setState({
      todos: todos || []
    });
  }

  componentDidUpdate() {
    // Save data to local storage
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  handleAddItem(title) {
    const item = {};
    item.id = uuidv4();
    item.title = title;
    item.done = false;
    this.setState({
      todos: [...this.state.todos, item]
    });
  }

  doneItem(id) {
    const updatedItems = this.state.todos.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : item;
    });
    this.setState({ todos: updatedItems });
  }

  deleteItem(id) {
    const updatedItems = this.state.todos.filter((item) => {
      return item.id !== id;
    });

    this.setState({ todos: updatedItems });
  }

  render() {
    return (
      <Container>
        <Title>My ToDoList</Title>
        <FormArea addItem={this.handleAddItem.bind(this)} />
        <Items>
          {this.state.todos.map((item, index) => {
            return (
              <TodoItem
                key={item.id}
                doneItem={this.doneItem.bind(this)}
                deleteItem={this.deleteItem.bind(this)}
                item={item}
              />
            );
          })}
        </Items>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  color: blue;
`;

const Items = styled.ul`
  width: 100%;
  margin: 20px auto;
`;
