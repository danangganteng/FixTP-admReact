import React, { useState, useEffect } from "react";

const NotificationPopup = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Handler to toggle popup visibility
        const handleTogglePopup = () => {
            console.log("Popup toggled"); // Debug log
            setIsActive((prev) => !prev);
        };

        // Listen to the custom event
        document.addEventListener("toggleNotifPopup", handleTogglePopup);

        // Clean up the event listener on unmount
        return () => {
            document.removeEventListener("toggleNotifPopup", handleTogglePopup);
        };
    }, []);

    const closePopup = (event) => {
        if (
            !event.target.closest("#notifPopup") &&
            !event.target.closest("#notif-Icon")
        ) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closePopup);
        return () => document.removeEventListener("click", closePopup);
    }, []);


    return (
        isActive && (
            <div id="notifPopup" className={`notif-popup ${isActive ? 'active' : ''}`}>
                <div className="notification-header">
                    <h2>Notifications</h2>
                </div>
                <div className="notification-list">
                    <div className="notification-item">
                        <img
                            src="https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"
                            alt="User Avatar"
                            className="avatar"
                        />
                        <div className="notification-content">
                            <p>
                                <strong>Developer</strong> is processing the report <span>See more</span>
                            </p>
                            <small>1m ago</small>
                        </div>
                    </div>
                    <div className="notification-item">
                        <img
                            src="https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"
                            alt="User Avatar"
                            className="avatar"
                        />
                        <div className="notification-content">
                            <p>
                                <strong>Rosina Wosky</strong> add products to cart
                            </p>
                            <small>20m ago</small>
                        </div>
                    </div>
                    <div className="notification-item">
                        <div className="icon-check">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                        <div className="notification-content">
                            <p>
                                hdYn637hn has made payment <strong>$499</strong> for{" "}
                                <span>Logitech G305 Lightspeed Mouse</span>
                            </p>
                            <a href="#">View on explorer</a>
                            <small>25m ago</small>
                        </div>
                    </div>
                    <div className="notification-item">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="avatar"
                        />
                        <div className="notification-content">
                            <p>
                                <strong>Customer Services</strong> have finished processing the report.{" "}
                                <span> See more</span>
                            </p>
                            <small>1h ago</small>
                        </div>
                    </div>
                    <div className="notification-item">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="avatar"
                        />
                        <div className="notification-content">
                            <p>
                                <strong>Laurel Welch</strong> donated <strong>$100.00</strong> for{" "}
                                <span>Carbon removal</span>
                            </p>
                            <small>2h ago</small>
                        </div>
                    </div>
                    <div className="notification-item">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="avatar"
                        />
                        <div className="notification-content">
                            <p>
                                <strong>Oswald Greenholt</strong> replied to your comment on{" "}
                                <span>Reforest the Amazon rainforest</span>
                            </p>
                            <small>3h ago</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default NotificationPopup;
