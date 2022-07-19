import React, { Component } from "react";
import "./Navbar.scss";

export class Navbar extends Component {
  state = {
    navItems: [
      { id: 1, link: "Top Games" },
      { id: 2, link: "New Games" },
      { id: 3, link: "Slots" },
      { id: 4, link: "Jackpots" },
      { id: 5, link: "Live" },
      { id: 6, link: "Blackjack" },
      { id: 7, link: "Roulette" },
      { id: 8, link: "Table" },
      { id: 9, link: "Poker" },
      { id: 10, link: "Other" },
    ],
    isActive: false,
    itemId: 2,
  };

  render() {
    const { navItems, itemId } = this.state;

    // const handleClick = (e) => {};

    return (
      <div className="navbarContainer">
        <ul>
          {navItems.map((navItem) => (
            <li
              onClick={() =>
                this.setState({
                  itemId: navItem.id,
                })
              }
              className={itemId === navItem.id ? "activeClass" : "link"}
              key={navItem.id}
            >
              {navItem.link}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Navbar;
