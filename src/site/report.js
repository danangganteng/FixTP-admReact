import React from "react";
import "../dis/css/report.css";

export default function Customers() {
  const handleProcess = (cardIndex) => {
    const card = document.querySelectorAll(".card1")[cardIndex];
    const statusElement = card.querySelector("td#status"); 
    if (!statusElement) return;  
    const statusText = statusElement.nextElementSibling;
  
    if (statusText && statusText.textContent.trim() === "Waiting") {
      statusText.textContent = "On Process";
      statusElement.classList.add("on-process");
    }
  };
  
  const handleFinish = (cardIndex) => {
    const card = document.querySelectorAll(".card1")[cardIndex];
    const statusElement = card.querySelector("td#status1"); 
    if (!statusElement) return;  
    const statusText = statusElement.nextElementSibling;
  
    console.log(statusText.textContent.trim()); 
  
    if (statusText && statusText.textContent.trim() === "Finished") {
      console.log("Card Finished, hiding now...");
      card.classList.add("hidden");  
    }
  };
  
  const renderCard = (title, time, person, email, status, statusClass, description, index) => (
    <div className="card1">
      <table>
        <tbody>
          <tr>
            <td className="icon">
              <ion-icon name="bulb-sharp"></ion-icon>
            </td>
            <td>{title}</td>
            <td className="time">{time}</td>
          </tr>
          <tr>
            <td className="icon">
              <ion-icon name="person-sharp"></ion-icon>
            </td>
            <td>{person}</td>
          </tr>
          <tr>
            <td className="icon">
              <ion-icon name="mail-sharp"></ion-icon>
            </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td className="icon" id={statusClass}>
              <ion-icon name="radio-outline"></ion-icon>
            </td>
            <td className="status" data-status={status}>{status}</td>
          </tr>
        </tbody>
      </table>
      <div className="inner-box">{description}</div>
      <div className="bottom">
        <button className="button" onClick={() => handleProcess(index)}>PROCESS</button>
        <button className="button" onClick={() => handleFinish(index)}>FINISH</button>
      </div>
    </div>
  );

  return (
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
              <img
                src="https://i.pinimg.com/736x/41/dc/36/41dc36f2370d6ea4fdb3f49fe8c3f1c5.jpg"
                alt="User"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            {renderCard(
              "RULES",
              "22 minutes ago",
              "Mathers",
              "mathers001@gmail.com",
              "Waiting",
              "status",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni nam officiis animi numquam?",
              0
            )}
            {renderCard(
              "BUGS",
              "2 minutes ago",
              "Mathers",
              "mathers001@gmail.com",
              "Finished",
              "status1",
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, reiciendis esse? Dicta!",
              1
            )}
          </div>
          <div className="column">
            {renderCard(
              "BUGS",
              "5 minutes ago",
              "Mathers",
              "mathers001@gmail.com",
              "Finished",
              "status1",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex vel eligendi ullam commodi veritatis?",
              2
            )}
            {renderCard(
              "RULES",
              "3 minutes ago",
              "Mathers",
              "mathers001@gmail.com",
              "Waiting",
              "status",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex vel eligendi ullam commodi veritatis?",
              3
            )}
          </div>
          <div className="column">
            {renderCard(
              "RULES",
              "15 minutes ago",
              "Mathers",
              "mathers001@gmail.com",
              "Waiting",
              "status",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex vel eligendi ullam commodi veritatis?",
              4
            )}
            {renderCard(
              "BUGS",
              "10 minutes ago",
              "Mathers",
              "mathers001@gmail.com",
              "Finished",
              "status1",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis iste libero suscipit?",
              5
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
