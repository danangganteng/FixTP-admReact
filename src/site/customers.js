import React, { useState } from 'react';
import '../dis/css/customer.css'; 

const OrdersPage = () => {
  const [filter, setFilter] = useState('all orders');
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    { customer: 'Mathers', location: 'Califonia, USA', product: 'VOYAGER68 v2 Lite 65%', price: 753, payment: 'Paid', status: 'delivered' },
    { customer: 'Mathers', location: 'Califonia, USA', product: 'Nvidia GeForce RTX 4090 Founders Edition', price: 1310, payment: 'Due', status: 'pending' },
    { customer: 'Mathers', location: 'Califonia, USA', product: 'APOLLO61 Lite 60% Wired Mechanical', price: 620, payment: 'Due', status: 'progress' },
    { customer: 'Mathers', location: 'Califonia, USA', product: 'Intel Core i9-14900K LGA1700', price: 825, payment: 'Paid', status: 'delivered' },
    { customer: 'Bambang Pamungkas', location: 'Jakarta, INA', product: 'Logitech G305 Lightspeed Mouse', price: 553, payment: 'Due', status: 'pending' },
    { customer: 'Bambang Pamungkas', location: 'Jakarta, INA', product: 'Gigabyte Radeon Rx 6900 Xt 16gb', price: 999, payment: 'Paid', status: 'return' },
    { customer: 'Shakur', location: 'Califonia, USA', product: 'Intel Core I7-12700f', price: 620, payment: 'Due', status: 'progress' },
    { customer: 'Shakur', location: 'Califonia, USA', product: 'Intel Core I7-12700f', price: 620, payment: 'Due', status: 'progress' },
    { customer: 'Shakur', location: 'Califonia, USA', product: 'Intel Core I7-12700f', price: 620, payment: 'Due', status: 'progress' },
  ];

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter.toLowerCase());
  };

  const filteredOrders = orders.filter((order) => {
    if (filter === 'all orders') return true;
    return order.status.includes(filter);
  }).filter((order) => {
    if (!searchTerm) return true;
    return order.customer.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <div className="container">
      <div className="main">
        <div className="main-content">
          <div className="contcust">
            <div className="hd">
              <div className="topbar">
                <div className="toggle">
                  <ion-icon name="menu-outline"></ion-icon>
                </div>
                <div className="rightnav">
                  <div className="notif">
                    <ion-icon name="notifications-outline"></ion-icon>
                  </div>
                  <div className="user">
                    <img src="https://i.pinimg.com/736x/41/dc/36/41dc36f2370d6ea4fdb3f49fe8c3f1c5.jpg" alt="User" />
                  </div>
                </div>
              </div>
            </div>

            <div className="Infit">
              <div className="filter">
                {['All Orders', 'Delivered', 'Progress', 'Pending', 'Return'].map((filterName) => (
                  <span
                    key={filterName}
                    className={filter === filterName.toLowerCase() ? 'active' : ''}
                    onClick={() => handleFilterClick(filterName)}
                  >
                    {filterName}
                  </span>
                ))}
              </div>
              <div className="Input">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="Orders">
              <table>
                <thead>
                  <tr>
                    <td>Customers</td>
                    <td>Product Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, index) => (
                    <tr key={index}>
                      <td>
                        <h4>
                          {order.customer} <br /> <span>{order.location}</span>
                        </h4>
                      </td>
                      <td>{order.product}</td>
                      <td>${order.price}</td>
                      <td>{order.payment}</td>
                      <td>
                        <span className={`status ${order.status}1`}>
                        {capitalizeFirstLetter(order.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="pagination">
                <ion-icon name="chevron-back-outline" className="page-icon"></ion-icon>
                <span className="page-number">1</span>
                <span className="page-number active">2</span>
                <span className="page-number">3</span>
                <span className="page-number">4</span>
                <span className="page-number">5</span>
                <ion-icon name="chevron-forward-outline" className="page-icon"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
