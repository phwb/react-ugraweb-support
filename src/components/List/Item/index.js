import React from 'react';

const leadingZero = (num) => num > 9 ? num : '0' + num;
const formatDate = (date) => `${leadingZero(date.getDate())}.${leadingZero(date.getMonth() + 1)}.${date.getFullYear()}`;

const Item = ({
  id,
  name,
  dateCreate
}) => {
  return (
    <tr>
      <td>{ id }</td>
      <td style={{paddingRight: 10}}>{ name }</td>
      <td>{ formatDate(dateCreate) }</td>
    </tr>
  );
};

export default Item;
