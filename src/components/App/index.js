import React, { Component, PropTypes } from 'react';
import AddItem from '../AddItem';
import List from '../List';

export default class App extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  state = {
    items: this.props.items
  };

  addItem = (item) => {
    const { items } = this.state;

    this.setState({
      items: [...items, item]
    });
  };

  render() {
    const {items} = this.state;

    return (
      <div>
        <List
          items={items}
        />
        <hr/>
        <AddItem
          onSubmit={this.addItem}
        />
      </div>
    );
  }
}
