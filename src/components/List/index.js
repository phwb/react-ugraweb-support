import React from 'react';
import Item from './Item';

const List = ({items}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Дата</th>
      </tr>
      </thead>
      <tbody>
      {items.map(item =>
          <Item key={item.id} {...item} />
      )}
      </tbody>
    </table>
  );
};

export default List;
