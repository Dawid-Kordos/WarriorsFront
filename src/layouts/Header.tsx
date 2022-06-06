import React from "react";
import logoTop from "../graphics/logo.jpg";

export const Header = () => (
    <header className="header">

        <div className="logo">
            <img className="logo__img" src={logoTop} alt="logo-top"/>
        </div>

        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="/warrior/add-form" className="nav__link">Register a new
                    warrior</a>
                </li>
                <li className="nav__item"><a href="/arena/fight-form" className="nav__link">Fight arena</a></li>
                <li className="nav__item"><a href="/hall-of-fame" className="nav__link">Hall of fame</a></li>
                <li className="nav__item"><a href="/warrior" className="nav__link">All warriors</a></li>
            </ul>
        </nav>

        <div className="logo">
            <img className="logo__img" src={logoTop} alt="logo-top"/>
        </div>

    </header>
);
