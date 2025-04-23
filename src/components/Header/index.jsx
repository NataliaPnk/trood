import React from "react";
import s from "../Header/index.module.css";
import bellIcon from "../../assets/media/bell/Client/bell.jpg";
import chatIcon from "../../assets/media/chat/Client/chat.jpg";
import circleIcon from "../../assets/media/circle/Client/circle.jpg";

export default function Header() {
  return (
    <header className={s.header}>
      <div>
        <h2>TROOD COMMUNITY</h2>

        <div>
          <div>
            <img src={chatIcon} alt="chatIcon" />
            <img src={bellIcon} alt="bellIcon" />
          </div>
          <div>
            <img src={circleIcon} alt="circleIcon" />
            <p>Alex Smith</p>
          </div>
        </div>
      </div>
    </header>
  );
}
