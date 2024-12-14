import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../dis/css/setting.css";

const EmailNotificationSettings = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    document.querySelectorAll('.sidebar ul li').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.sidebar ul li').forEach(el => el.classList.remove('active'));
        item.classList.add('active');

        document.querySelectorAll('.content-section').forEach(content => {
          content.style.display = 'none';
        });

        const contentId = item.getAttribute('data-content');
        document.getElementById(contentId).style.display = 'block';
      });
    });

    document.getElementById('save-btn').addEventListener('click', () => {
      const profileData = {
        firstName: document.getElementById('first-name').innerText.trim(),
        lastName: document.getElementById('last-name').innerText.trim(),
        email: document.getElementById('email').innerText.trim(),
        phone: document.getElementById('phone').innerText.trim(),
        bio: document.getElementById('bio').innerText.trim(),
        country: document.getElementById('country').innerText.trim(),
        city: document.getElementById('city').innerText.trim(),
        postalCode: document.getElementById('postal-code').innerText.trim(),
        taxId: document.getElementById('tax-id').innerText.trim(),
      };

      console.log('Profile Updated:', profileData);
      alert('Profile updated successfully!');
    });
  }, []);

  const handleLogoutClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupAction = (action) => {
    if (action === "yes") {
      localStorage.removeItem("isLoggedIn"); 
      navigate("/login"); 
    }
    setIsPopupVisible(false); 
  };

  return (
    <div>
      <div className="main">
        <div className="main-content">
          <div className="topbar">
            <div className="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
          </div>

          <div className="containerset">
            <div className="contsett">
              <header className="header1">
                <div className="profile">
                  <div className="profile-icon">
                    <img
                      src="https://i.pinimg.com/736x/41/dc/36/41dc36f2370d6ea4fdb3f49fe8c3f1c5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="profile-info">
                    <h2>Welcome, </h2>
                    <p>User129374012</p>
                  </div>
                </div>
                <div className="right">
                  <div className="add">
                    <ion-icon name="add-outline"></ion-icon>
                    <p>Add account</p>
                  </div>
                  <div className="log" onClick={handleLogoutClick}>
                    <ion-icon name="log-out-outline"></ion-icon>
                    <p>Log Out</p>
                  </div>
                </div>
              </header>

              {isPopupVisible && (
                <div className="popup-overlay">
                  <div className="popup-box">
                    <h3>Logout</h3>
                    <p>are you sure you want to leave?</p>
                    <div className="popup-buttons">
                      <button onClick={() => handlePopupAction("yes")}>Yes</button>
                      <button onClick={() => handlePopupAction("no")}>No</button>
                    </div>
                  </div>
                </div>
              )}

              <div className="settings">
                <nav className="sidebar">
                  <ul>
                    <li data-content="profile-content">Profile</li>
                    <li data-content="notification-content" className="active">
                      Notification
                    </li>
                    <li data-content="privacy-content">Privacy</li>
                    <li data-content="security-content">Security</li>
                    <li data-content="history-content">History</li>
                    <li data-content="applications-content">Applications</li>
                  </ul>
                </nav>

                <main className="content">
                  <div
                    id="profile-content"
                    className="content-section"
                    style={{ display: "none" }}
                  >
                    <div className="profile-container">
                      <div className="profile-header">
                        <div className="profile-info">
                          <img
                            src="https://i.pinimg.com/736x/41/dc/36/41dc36f2370d6ea4fdb3f49fe8c3f1c5.jpg"
                            alt="Profile Picture"
                            className="profile-pic"
                          />
                          <div className="text-info">
                            <h2 className="pn">User129374012</h2>
                            <p>Team Manager</p>
                            <p className="location">Jakarta, Indonesia</p>
                          </div>
                        </div>
                      </div>

                      <div className="profile-details">
                        <div className="section">
                          <h3>Personal Information</h3>
                          <div className="detail-row">
                            <div className="detail">
                              <div className="caption">
                                <p>First Name:</p>
                              </div>
                              <span id="first-name" contentEditable>
                                User
                              </span>
                            </div>
                            <div className="detail">
                              <div className="caption">
                                <p>Last Name:</p>
                              </div>
                              <span id="last-name" contentEditable>
                                129374012
                              </span>
                            </div>
                          </div>
                          <div className="detail-row">
                            <div className="detail">
                              <div className="caption">
                                <p>Email Address:</p>
                              </div>
                              <span id="email" contentEditable>
                                user129374012@aindotech.com
                              </span>
                            </div>
                            <div className="detail">
                              <div className="caption">
                                <p>Phone:</p>
                              </div>
                              <span id="phone" contentEditable>
                                +62 1111 2222 222
                              </span>
                            </div>
                          </div>
                          <div className="detail-row">
                            <div className="detail">
                              <div className="caption">
                                <p>Bio:</p>
                              </div>
                              <span id="bio" contentEditable>
                                Team Manager
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="section">
                          <h3>Address</h3>
                          <div className="detail-row">
                            <div className="detail">
                              <div className="caption">
                                <p>Country</p>
                              </div>
                              <span id="country" contentEditable>
                                Indonesia
                              </span>
                            </div>
                            <div className="detail">
                              <div className="caption">
                                <p>City</p>
                              </div>
                              <span id="city" contentEditable>
                                Jakarta
                              </span>
                            </div>
                          </div>
                          <div className="detail-row">
                            <div className="detail">
                              <div className="caption">
                                <p>Postal Code</p>
                              </div>
                              <span id="postal-code" contentEditable>
                                10110
                              </span>
                            </div>
                            <div className="detail">
                              <div className="caption">
                                <p>Province</p>
                              </div>
                              <span id="tax-id" contentEditable>
                                DKI Jakarta
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button id="save-btn" className="save-button">
                        Save Changes
                      </button>
                    </div>
                  </div>

                  <div id="notification-content" className="content-section">
                    <h3>Email Notifications</h3>
                    <div className="notifications">
                      <div className="section">
                        <h4>Activity Notifications</h4>
                        <label>
                          <span>someone has made a payment</span>
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                        <label>
                          <span>financial income</span>
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                        <label>
                          <span>Latest history of deliveries</span>
                          <input type="checkbox" defaultChecked />
                          <span className="slider round"></span>
                        </label>
                        <label>
                          <span>someone left a comment</span>
                          <input type="checkbox" defaultChecked />
                          <span className="slider round"></span>
                        </label>
                        <label>
                          <span>someone puts a product in the basket</span>
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                        <label>
                          <span>product purchase</span>
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <div className="section">
                        <h4>Dribbble Emails</h4>
                        <label>
                          <span>Dribbble Newsletter</span>
                          <input type="checkbox" defaultChecked />
                          <span className="slider round"></span>
                        </label>
                        <label>
                          <span>Weekly Replay</span>
                          <input type="checkbox" />
                        </label>
                        <label>
                          <span>Weekly jobs</span>
                          <input type="checkbox" />
                        </label>
                        <label>
                          <span>Jobs Near You</span>
                          <input type="checkbox" />
                        </label>
                        <label>
                          <span>Meetups Near You</span>
                          <input type="checkbox" defaultChecked />
                        </label>
                      </div>
                    </div>
                    <button className="update-btn">Save As</button>
                  </div>

                  <div
                    id="privacy-content"
                    className="content-section"
                    style={{ display: "none" }}
                  >
                    <h3>Privacy</h3>
                    <p>Here is the privacy section content.</p>
                  </div>

                  <div
                    id="security-content"
                    className="content-section"
                    style={{ display: "none" }}
                  >
                    <h3>Security</h3>
                    <p>Here is the security section content.</p>
                  </div>

                  <div
                    id="history-content"
                    className="content-section"
                    style={{ display: "none" }}
                  >
                    <h3>History</h3>
                    <p>Here is the history section content.</p>
                  </div>

                  <div
                    id="applications-content"
                    className="content-section"
                    style={{ display: "none" }}
                  >
                    <h3>Applications</h3>
                    <p>Here is the applications section content.</p>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailNotificationSettings;
