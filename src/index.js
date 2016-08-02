import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const items = [
  {
    id: 1,
    name: 'Заменить бланк еще раз',
    dateCreate: new Date(2015, 7, 10),
    text: 'Детальный текст'
  },
  {
    id: 2,
    name: 'электронная очередь',
    dateCreate: new Date(2015, 8, 9),
    text: 'Детальный текст'
  },
  {
    id: 3,
    name: 'Удаление подразделов',
    dateCreate: new Date(2015, 10, 22),
    text: 'Детальный текст'
  },
  {
    id: 4,
    name: 'Заявка от 22.10.2015 14:25:10',
    dateCreate: new Date(2015, 9, 22),
    text: 'Детальный текст'
  },
  {
    id: 5,
    name: '	О добавлении графика личного приема',
    dateCreate: new Date(2015, 11, 5),
    text: 'Детальный текст'
  }
];

render(
  <App
    items={ items }
  />,
  document.getElementById('root')
);
