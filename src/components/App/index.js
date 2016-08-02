import React, { Component, PropTypes } from 'react';
import AddItem from '../AddItem';
import List from '../List';

export default class App extends Component {
  state = {
    items: this.props.items
  };

  static propTypes = {
    items: PropTypes.array.isRequired
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
