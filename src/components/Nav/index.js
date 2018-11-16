import React from "react";
import "./Nav.sass";

const nav_items = [
  {
    name: "Dashboard",
    icon: "dashboard",
    href: "dashboard",
    active: true,
  },
  {
    name: "Megabot",
    icon: "megabot",
    href: "megabot",
  },
  {
    name: "Bot market",
    icon: "bot_market",
    href: "bot_market",
  },
  {
    name: "Coin prices",
    icon: "coin_prices",
    href: "coin_prices",
  },
  {
    name: "Profile",
    icon: "profile",
    href: "profile",
    notification: 3,
  },
];

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      {nav_items.map((item) => (
        <li className="nav__item" key={item.name}>
          <a className={`nav__link ${item.active ? "nav__link--active" : ""}`} href={item.href}>
            <span className={`nav__icon nav__icon--${item.icon}`} />
            {item.name}
            {item.notification && <span className="nav__notification">{item.notification}</span>}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
