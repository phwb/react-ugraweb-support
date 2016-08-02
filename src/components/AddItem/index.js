import React, { Component } from 'react';

let nextItemID = 5;
export default class AddItem extends Component {
  componentDidMount() {
    this.refs.name.focus();
  }

  onAddItem = (e) => {
    const {refs} = this;
    const {onSubmit} = this.props;

    const name = refs.name.value.trim();
    const text = refs.text.value.trim();

    e.preventDefault();
    if (!name) {
      return alert('Enter name of ticket');
    }
    if (!text) {
      return alert('Enter text of ticket');
    }

    refs.name.value = '';
    refs.text.value = '';

    onSubmit({
      id: nextItemID += 1,
      name: name,
      dateCreate: new Date(),
      text: text
    });
  };

  render() {
    return (
      <div>
        <label>
          Название <br/>
          <input
            type="text"
            placeholder="Краткое название заявки"
            defaultValue=""
            ref="name"
          />
        </label>
        <br/>
        <label>
          Текст <br/>
          <textarea
            cols="30"
            rows="10"
            placeholder="Подробное описание задачи..."
            defaultValue=""
            ref="text"
          />
        </label>
        <br/>
        <button onClick={this.onAddItem}>Отправить заявку</button>
      </div>
    )
  }
}
