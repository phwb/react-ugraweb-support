const defaults = {
  sites: [
    {
      id: 33,
      name: 'ufms86.ru'
    },
    {
      id: 103,
      name: 'hmkpnd.ru'
    },
    {
      id: 94,
      name: 'hoteybar.ru'
    }
  ],
  status: [
    {
      id: 0,
      name: 'Новая заявка'
    },
    {
      id: 1,
      name: 'На рассмотрении'
    },
    {
      id: 2,
      name: 'Назначен специалист'
    },
    {
      id: 3,
      name: 'В работе'
    },
    {
      id: 4,
      name: 'Готово'
    },
    {
      id: 5,
      name: 'Заявка отменена'
    }
  ],
  workers: [
    {
      id: 0,
      name: '-- не назначен --'
    },
    {
      id: 1,
      name: 'Зуев Алексей'
    },
    {
      id: 2,
      name: 'Семёнов Антон'
    },
    {
      id: 3,
      name: 'Спасенников Владимир'
    },
    {
      id: 4,
      name: 'Нишанов Алишер'
    },
    {
      id: 5,
      name: 'Возняк Алексей'
    },
    {
      id: 6,
      name: 'Конаков Артем'
    }
  ],
  contacts: [
    {
      id: 106,
      name: 'Алексеенко Ольга'
    },
    {
      id: 109,
      name: 'Березовская Вероника'
    },
    {
      id: 118,
      name: 'Денисенко Лейла'
    },
    {
      id: 115,
      name: 'Мавлюдова Майя'
    },
    {
      id: 112,
      name: 'Пащенко Надежда'
    },
    {
      id: 51,
      name: 'УФ МС'
    },
    {
      id: 103,
      name: 'Ярославцева Алла'
    }
  ]
};
const getDefault = (key, id) => {
  let arr = defaults[key];
  let filter = arr.filter(a => a.id === id) || [];

  if (filter.length) {
    return filter[0].name;
  }

  return '-- не назначен --';
};
const getSite = (id) => getDefault('sites', id);
const getStatus = (id) => getDefault('status', id);
const getContact = (id) => getDefault('contacts', id);
const getWorker = (id) => getDefault('workers', id);
const formatDate = (date) => `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
const items = [
  {
    id: 697,
    name: 'Заменить бланк еще раз',
    dateCreate: new Date(2015, 7, 27),
    siteID: 33,
    workerID: 4,
    statusID: 4
  },
  {
    id: 994,
    name: 'электронная очередь',
    dateCreate: new Date(2015, 8, 13),
    siteID: 33,
    workerID: 3,
    statusID: 4
  },
  {
    id: 2356,
    name: 'Удаление подразделов',
    dateCreate: new Date(2015, 10, 22),
    siteID: 33,
    workerID: 2,
    statusID: 4
  },
  {
    id: 2368,
    name: 'Заявка от 22.10.2015 14:25:10',
    dateCreate: new Date(2015, 10, 22),
    siteID: 33,
    workerID: 2,
    statusID: 4
  },
  {
    id: 2707,
    name: '	О добавлении графика личного приема',
    dateCreate: new Date(2015, 11, 5),
    siteID: 33,
    workerID: 1,
    statusID: 4
  }
];
let nextItemID = items[items.length - 1].id;

const Item = ({
  id,
  name,
  dateCreate,
  siteID,
  workerID,
  statusID
}) => {
  return (
    <tr>
      <td>{ id }</td>
      <td>{ name }</td>
      <td>{ getSite(siteID) }</td>
      <td>{ getWorker(workerID) }</td>
      <td>{ getStatus(statusID) }</td>
      <td>{ formatDate(dateCreate) }</td>
    </tr>
  );
};
const List = ({items}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Сайт</th>
        <th>Исполнитель</th>
        <th>Статус</th>
        <th>Дата</th>
      </tr>
      </thead>
      <tbody>
      { items.map(item => <Item key={item.id} {...item} />) }
      </tbody>
    </table>
  );
};

const AddItem = React.createClass({
  componentDidMount() {
    this.refs.name.focus();
  },

  onAddItem(e) {
    const {refs} = this;
    const {onSubmit} = this.props;

    const siteID = +refs.site.value;
    const contactID = +refs.contact.value;
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
      siteID: siteID,
      workerID: 0,
      statusID: 0,
      contactID: contactID
    });
  },

  render() {
    const {sites, contacts} = this.props;
    return (
      <div>
        <label>
          Сайт <br/>
          <select ref="site">
            { sites.map(site =>
              <option
                value={site.id}
                key={site.id}
              >
                {site.name}
              </option>
            ) }
          </select>
        </label>
        <br/>
        <label>
          Контактное лицо <br/>
          <select ref="contact">
            { contacts.map(contact =>
              <option
                value={contact.id}
                key={contact.id}
              >
                { contact.name }
              </option>
            ) }
          </select>
        </label>
        <br/>
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
});

const App = React.createClass({
  getInitialState() {
    return {
      items: this.props.items
    }
  },

  propTypes() {
    return {
      items: React.PropTypes.array.isRequired
    };
  },

  addItem(item) {
    const {items} = this.state;

    this.setState({
      items: [...items, item]
    });
  },

  render() {
    const {sites, contacts} = this.props;
    const {items} = this.state;

    return (
      <div>
        <List
          items={items}
        />
        <hr/>
        <AddItem
          sites={sites}
          contacts={contacts}
          onSubmit={this.addItem}
        />
      </div>
    );
  }
});

ReactDOM.render(
  <App
    items={items}
    sites={defaults.sites}
    contacts={defaults.contacts}
  />,
  document.getElementById('root')
);
