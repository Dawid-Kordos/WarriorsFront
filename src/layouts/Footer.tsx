import React from "react";
import logoBottom from "../graphics/logo1.png";

export const Footer = () => (
    <footer className="footer">

        <div className="logo">
            <img className="logo__img" src={logoBottom} alt="logo-bottom"/>
        </div>

        <section className="footer__section">
            <ul className="footer__list">
                <li className="footer__item">All rights reserved!</li>
                <li className="footer__item">MegaK <p>2021 / 2022</p></li>
                <li className="footer__item">Author: <p>Dawid Kordos</p></li>
                <li className="footer__item">Contact:
                    <p>
                        <a className="footer__link"
                           href="https://facebook.com">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </p>
                </li>
            </ul>
        </section>

        <div className="logo">
            <img className="logo__img" src={logoBottom} alt="logo-bottom"/>
        </div>

    </footer>
);
