import React from 'react';
import NotificationPopup from '../nav/notif.js';

const Dashboard = () => {
  const triggerNotificationEvent = () => {
    console.log("Notification event triggered"); // Debug log
    const event = new Event("toggleNotifPopup");
    document.dispatchEvent(event);
};

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="main-content">
            <div className="topbar">
              <div className="toggle">
                <ion-icon name="menu-outline"></ion-icon>
              </div>
              <div className="search">
                <label>
                  <input type="text" placeholder="Search here" />
                </label>
              </div>
              <div className="rightnav">
                <div className="notif" id="notif-Icon" onClick={triggerNotificationEvent}>
                  <ion-icon name="notifications-outline"></ion-icon>
                </div>
                <div className="user" id="userIcon">
                  <img
                    src="https://i.pinimg.com/736x/41/dc/36/41dc36f2370d6ea4fdb3f49fe8c3f1c5.jpg"
                    alt="user"
                  />
                </div>
              </div>
            </div>

            <div className="cardBox">
              <div className="card">
                <div>
                  <div className="numbers">1.894</div>
                  <div className="cardName">Daily Views</div>
                </div>
                <div className="iconBx">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">222</div>
                  <div className="cardName">Sales</div>
                </div>
                <div className="iconBx">
                  <ion-icon name="cart-outline"></ion-icon>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">384</div>
                  <div className="cardName">Comments</div>
                </div>
                <div className="iconBx">
                  <ion-icon name="chatbubbles-outline"></ion-icon>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">$9.976</div>
                  <div className="cardName">Earning</div>
                </div>
                <div className="iconBx">
                  <ion-icon name="cash-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="details">
              <div className="recentOrders">
                <div className="cardHeader">
                  <h2>Orders</h2>
                  <a href="#" className="btn">
                    View All
                  </a>
                </div>
                <table>
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Payment</td>
                      <td>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>VOYAGER68 v2 Lite 65%</td>
                      <td>$753</td>
                      <td>Paid</td>
                      <td>
                        <span className="status delivered">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Nvidia GeForce RTX 4090 Founders Edition</td>
                      <td>$1310</td>
                      <td>Due</td>
                      <td>
                        <span className="status pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ASUS VA27EHF Eye Care Monitor 27-inch</td>
                      <td>$1200</td>
                      <td>Paid</td>
                      <td>
                        <span className="status return">Return</span>
                      </td>
                    </tr>
                    <tr>
                      <td>APOLLO61 Lite 60% Wired Mechanical</td>
                      <td>$620</td>
                      <td>Due</td>
                      <td>
                        <span className="status inProgress">Progress</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Intel Core i9-14900K LGA1700</td>
                      <td>$825</td>
                      <td>Paid</td>
                      <td><span className="status delivered">Delivered</span></td>
                    </tr>

                    <tr>
                      <td>Logitech G305 Lightspeed Mouse</td>
                      <td>$553</td>
                      <td>Due</td>
                      <td><span className="status pending">Pending</span></td>
                    </tr>

                    <tr>
                      <td>Gigabyte Radeon Rx 6900 Xt 16gb</td>
                      <td>$999</td>
                      <td>Paid</td>
                      <td><span className="status return">Return</span></td>
                    </tr>

                    <tr>
                      <td>Intel Core I7-12700f</td>
                      <td>$620</td>
                      <td>Due</td>
                      <td><span className="status inProgress">Progress</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="recentCustomers">
                <div className="cardHeader">
                  <h2>Customers</h2>
                </div>
                <table>
                  <tbody>
                  <tr>
                    <td width="60px">
                      <div className="imgBx">
                        <img
                          src="https://i.pinimg.com/736x/ee/d9/af/eed9afe384933d19b615a1610b738b85.jpg"
                          alt="customer"
                        />
                      </div>
                    </td>
                    <td>
                      <h4>
                        Mathers <br /> <span>Califonia, USA</span>
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div className="imgBx">
                        <img
                          src="https://i.pinimg.com/564x/96/bd/54/96bd5438cdcecbd6e051e7d01c9cf8b2.jpg"
                          alt=" "
                        />
                      </div>
                    </td>
                    <td>
                      <h4>Bambang Pamungkas <br /> <span>Jakarta, INA</span></h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="60px">
                      <div className="imgBx">
                          <img
                          src="https://i.pinimg.com/564x/f2/15/41/f21541d5d59eceb63be66d5f5eb6d42c.jpg"
                          alt=""
                         />
                        </div>
                    </td>
                    <td>
                      <h4>Unknow <br /> <span>Sydney, AUS</span></h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="60px">
                      <div className="imgBx">
                        <img
                        src="https://i.pinimg.com/564x/6e/d3/c9/6ed3c9749f561f6c3fbf9443288c20ca.jpg"
                        alt=""
                        />
                        </div>
                    </td>
                    <td>
                      <h4>Shakur <br /> <span>Califonia, USA</span></h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="60px">
                      <div className="imgBx">
                        <img
                        src="https://i.pinimg.com/564x/f2/15/41/f21541d5d59eceb63be66d5f5eb6d42c.jpg"
                        alt="" 
                        />
                        </div>
                    </td>
                    <td>
                      <h4>Unknow <br/> <span>Tokyo, JPN</span></h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="60px">
                      <div className="imgBx">
                        <img
                        src="https://i.pinimg.com/564x/f2/15/41/f21541d5d59eceb63be66d5f5eb6d42c.jpg"
                        alt=""
                        />
                        </div>
                    </td>
                    <td>
                      <h4>Unknow <br/> <span>Manchester, ENG</span></h4>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div className="imgBx">
                        <img
                        src="https://i.pinimg.com/564x/f2/15/41/f21541d5d59eceb63be66d5f5eb6d42c.jpg"
                        alt=""
                        />
                        </div>
                    </td>
                    <td>
                      <h4>Ridwan <br/> <span>Paris, SGP</span></h4>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <NotificationPopup />
      </div>
    </>
  );
};

export default Dashboard;
