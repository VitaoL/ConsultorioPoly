import React from "react";
import "../css/navbar.css";

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar_div">
                <nav className="navBar_nav">
                    <p className="navBar_p">Dra.Polyana Lustosa & Dra.Patricia lustosa </p>
                    <ul className="navBar_ul">
                        <li className="navBar_li">
                            <a className="navBar_a" href="#">
                                Home
                            </a>
                        </li>
                        <li className="navBar_li">
                            <a className="navBar_a" href="#">
                                Endo
                            </a>
                        </li>
                        <li className="navBar_li">
                            <a className="navBar_a" href="#cell">
                                Contato pelo web
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;
