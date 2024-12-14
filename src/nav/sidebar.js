import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  useEffect(() => {
    // Hover dan toggle
    const enableSidebarFeatures = () => {
      const list = document.querySelectorAll('.navigation li');

      function activeLink() {
        list.forEach((item) => item.classList.remove('hovered'));
        this.classList.add('hovered');
      }

      list.forEach((item) => item.addEventListener('mouseover', activeLink));

      const toggle = document.querySelector('.toggle');
      const navigation = document.querySelector('.navigation');
      const main = document.querySelector('.main');

      if (toggle) {
        toggle.onclick = function () {
          navigation.classList.toggle('active');
          main.classList.toggle('active');
        };
      }

      const navLinks = document.querySelectorAll('.navigation ul li a');
      const currentPage = window.location.pathname;

      navLinks.forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    enableSidebarFeatures();
  }, [location]);  // Menambahkan `location` sebagai dependensi


  return (
    <div className="container" id="navigation-container">
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <ion-icon name="logo-amplify"></ion-icon>
            </span>
            <span className="title">Abadi Indotech</span>
          </Link>
        </li>

        <li>
          <Link to="/dashboard" className="active">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="title">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/customers">
            <span className="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="title">Customers</span>
          </Link>
        </li>

        <li>
          <Link to="/product">
            <span className="icon">
              <ion-icon name="bag-outline"></ion-icon>
            </span>
            <span className="title">Product</span>
          </Link>
        </li>

        <li>
          <Link to="/report">
            <span className="icon">
              <ion-icon name="document-text-outline"></ion-icon>
            </span>
            <span className="title">Report</span>
          </Link>
        </li>

        <li>
          <Link to="/setting">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="title">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar