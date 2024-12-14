import React, { useEffect, useState } from "react";
import "../dis/css/product.css";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all product");
  const [status, setStatus] = useState("all status");
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    const productRows = document.querySelectorAll(".product-table tbody tr");
    productRows.forEach((row) => {
      const productName = row.querySelector(".product-info span").textContent.toLowerCase();
      row.style.display = productName.includes(searchTerm.toLowerCase()) ? "" : "none";
    });
  }, [searchTerm]);

  useEffect(() => {
    const productRows = document.querySelectorAll(".product-table tbody tr");
    productRows.forEach((row) => {
      const productCategory = row.dataset.category.toLowerCase();
      const productStatusElement = row.querySelector(".status");
      const productStatus = productStatusElement ? productStatusElement.textContent.toLowerCase() : "";

      const categoryMatch = category === "all product" || productCategory === category;
      const statusMatch = status === "all status" || productStatus === status;

      row.style.display = categoryMatch && statusMatch ? "" : "none";
    });
  }, [category, status]);

  useEffect(() => {
    const productRows = document.querySelectorAll(".product-table tbody tr");
    productRows.forEach((product) => {
      const priceElement = product.querySelector(".product-price");
      const productPrice = parseInt(priceElement.innerText.replace('$', '').trim());
      product.style.display = productPrice <= maxPrice ? "" : "none";
    });
  }, [maxPrice]);

  const toggleFilterVisibility = () => {
    const actions = document.querySelector(".actions");
    actions.classList.toggle("hidden");
  };

  const toggleStatus = (row) => {
    const statusElement = row.querySelector(".status");
    if (statusElement.classList.contains("active")) {
      statusElement.classList.remove("active");
      statusElement.classList.add("inactive");
      statusElement.textContent = "Inactive";
    } else {
      statusElement.classList.remove("inactive");
      statusElement.classList.add("active");
      statusElement.textContent = "Active";
    }
  };

  return (
    <div id="navigation-container">
      <div className="main">
        <div className="main-content">
          <div className="topbar">
            <div className="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div className="rightnav">
              <div className="notif">
                <ion-icon name="notifications-outline"></ion-icon>
              </div>
              <div className="user">
                <img src="https://i.pinimg.com/736x/41/dc/36/41dc36f2370d6ea4fdb3f49fe8c3f1c5.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="headprod">
            <div className="input-group">
              <i className="ion-search"></i>
              <input
                type="text"
                className="search-bar"
                placeholder="Search Product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="btn1">
              <div className="btn filter" onClick={toggleFilterVisibility}>
                <ion-icon name="filter"></ion-icon>
                <div>Filter</div>
              </div>
            </div>
          </div>
          <div className="containerpro">
            <div className="prods">
              <div className="header">
                <div className="actions hidden">
                  <div>
                    <h3>Category</h3>
                    <select
                      className="dropdown category-dropdown"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="all product">All Product</option>
                      <option value="keyboard">Keyboard</option>
                      <option value="mouse">Mouse</option>
                      <option value="motherboard">Motherboard</option>
                      <option value="vga">VGA</option>
                      <option value="processor">Processor</option>
                    </select>
                  </div>
                  <div>
                    <h3>Status</h3>
                    <select
                      className="dropdown status-dropdown"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="all status">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div>
                    <h3>Price</h3>
                    <div className="range-slider">
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        step="50"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                      <div>
                        <span id="currentPrice">${maxPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Products</th>
                    <th>Views</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-category="keyboard">
                    <td>
                      <div className="product-info">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ11yGT1cbOvBxsd5rk8lL3bbN5NpEdk0UUA&s"
                          alt="Product Image"
                        />
                        <span>VOYAGER68 v2 Lite 65%</span>
                      </div>
                    </td>
                    <td className="product-price">$426</td>
                    <td>113</td>
                    <td>112</td>
                    <td>
                      <span className="status active">Active</span>
                    </td>
                    <td>
                      <button
                        className="btn edit"
                        onClick={(e) => toggleStatus(e.target.closest("tr"))}
                      >
                        Edit<ion-icon name="create-outline"></ion-icon>
                      </button>
                    </td>
                  </tr>

                  <tr data-category="vga">
                    <td>
                      <div className="product-info">
                        <img src="https://i.pinimg.com/736x/0f/b6/c5/0fb6c5d3ceb0ef7c63bbbc0210f5044b.jpg"
                          alt="Product Image" />
                        <span>Nvidia GeForce RTX 4090 Founders Edition</span>
                      </div>
                    </td>
                    <td className="product-price">$999</td>
                    <td>321</td>
                    <td>212</td>
                    <td>
                      <span className="status active">Active</span>
                    </td>
                    <td>
                      <button
                        className="btn edit"
                        onClick={(e) => toggleStatus(e.target.closest("tr"))}
                      >
                        Edit<ion-icon name="create-outline"></ion-icon>
                      </button>
                    </td>
                  </tr>

                  <tr data-category="processor">
                    <td>
                      <div className="product-info">
                        <img src="https://i.pinimg.com/736x/8c/25/4d/8c254d2e243b864d00d39a25dbd16b6d.jpg"
                          alt="Product Image" />
                        <span>Intel Core i9-14900K LGA1700</span>
                      </div>
                    </td>
                    <td className="product-price">$574</td>
                    <td>121</td>
                    <td>111</td>
                    <td>
                      <span className="status active">Active</span>
                    </td>
                    <td>
                      <button
                        className="btn edit"
                        onClick={(e) => toggleStatus(e.target.closest("tr"))}
                      >
                        Edit<ion-icon name="create-outline"></ion-icon>
                      </button>
                    </td>
                  </tr>

                  <tr data-category="mouse">
                    <td>
                      <div className="product-info">
                        <img
                          src="https://i.pinimg.com/736x/a6/39/59/a63959b018ed84e169467d4995ff1c17.jpg"
                          alt="Product Image" />
                        <span>Logitech G305 Lightspeed Mouse</span>
                      </div>
                    </td>
                    <td className="product-price">$38</td>
                    <td>101</td>
                    <td>312</td>
                    <td>
                      <span className="status active">Active</span>
                    </td>
                    <td>
                      <button
                        className="btn edit"
                        onClick={(e) => toggleStatus(e.target.closest("tr"))}
                      >
                        Edit<ion-icon name="create-outline"></ion-icon>
                      </button>
                    </td>
                  </tr>

                  <tr data-category="monitor">
                    <td>
                      <div className="product-info">
                        <img
                          src="https://elevenkomputer.com/12388-home_default/monitor-aoc-24g15n-70-238-va-180hz-1ms.jpg"
                          alt="Product Image" />
                        <span>AOC 24G15N/70 23.8" VA 180Hz 1ms</span>
                      </div>
                    </td>
                    <td className="product-price">$115</td>
                    <td>21</td>
                    <td>112</td>
                    <td>
                      <span className="status inactive">inactive</span>
                    </td>
                    <td>
                      <button
                        className="btn edit"
                        onClick={(e) => toggleStatus(e.target.closest("tr"))}
                      >
                        Edit<ion-icon name="create-outline"></ion-icon>
                      </button>
                    </td>
                  </tr>

                  <tr data-category="vga">
                    <td>
                      <div className="product-info">
                        <img
                          src="https://i.pinimg.com/736x/a7/9c/c7/a79cc7aea89cc26e9a8aa98098a9817c.jpg"
                          alt="Product Image" />
                        <span>Gigabyte Radeon Rx 6900 Xt 16gb</span>
                      </div>
                    </td>
                    <td className="product-price">$599</td>
                    <td>51</td>
                    <td>112</td>
                    <td>
                      <span className="status active">Active</span>
                    </td>
                    <td>
                      <button
                        className="btn edit"
                        onClick={(e) => toggleStatus(e.target.closest("tr"))}
                      >
                        Edit<ion-icon name="create-outline"></ion-icon>
                      </button>
                    </td>
                  </tr>
                  <tr data-category="motherboard">
                    <td>
                      <div className="product-info">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNPvkayS5v0xLb8t4-ZVwdlC-l37HxKslam8r1S-93fqWWnsERYOyR4gVdCzY8u2me-dMNdhookL4EmMP-iq5DyNZv7WnLZSIcFKIW8cxmQ0iJcxd2LKtR&usqp=CAE"
                          alt="Product Image" />
                        <span>ASROCK B760 PRO RS/D4 LGA 1700</span>
                      </div>
                    </td>
                    <td className="product-price">$159</td>
                    <td>51</td>
                    <td>112</td>
                    <td>
                      <span className="status active">Active</span>
                    </td>
                    <td>
                      <button
                        className="btn edit"
                        onClick={(e) => toggleStatus(e.target.closest("tr"))}
                      >
                        Edit<ion-icon name="create-outline"></ion-icon>
                      </button>
                    </td>
                  </tr>
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

export default ProductList;
