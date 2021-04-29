import React from 'react';

class ListExample extends React.PureComponent {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => <div>Price : {price} won</div>);
    return (
      <div>
        <label>Price List</label>
        {prices}
      </div>
    );
  }
}

export default ListExample;
