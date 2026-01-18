import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <svg
                className="header-hex"
                viewBox="0 0 140 120"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  className="header-hex-path header-hex-path--outer"
                  d="M98.545 68.405L70 84.381C67.525 85.81 64.475 85.81 62 84.381L33.455 68.405C30.98 66.976 29.455 64.335 29.455 61.476L29.455 28.5234C29.455 25.6653 30.98 23.0243 33.455 21.5952L62 5.6187C64.475 4.1896 67.525 4.1897 70 5.6187L98.545 21.5952C101.02 23.0243 102.545 25.6653 102.545 28.5234L102.545 61.476C102.545 64.335 101.02 66.976 98.545 68.405Z"
                  stroke={theme.text}
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="header-hex-path header-hex-path--inner"
                  d="M98.545 68.405L70 84.381C67.525 85.81 64.475 85.81 62 84.381L33.455 68.405C30.98 66.976 29.455 64.335 29.455 61.476L29.455 28.5234C29.455 25.6653 30.98 23.0243 33.455 21.5952L62 5.6187C64.475 4.1896 67.525 4.1897 70 5.6187L98.545 21.5952C101.02 23.0243 102.545 25.6653 102.545 28.5234L102.545 61.476C102.545 64.335 101.02 66.976 98.545 68.405Z"
                  stroke={theme.text}
                  strokeWidth="3"
                  fill="none"
                  transform="translate(70 45) scale(0.82) translate(-70 -45)"
                />
                <text
                  className="header-hex-text"
                  x="64"
                  y="44"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  alignmentBaseline="middle"
                  fontFamily="Agustina Regular"
                  fontSize="12"
                  fontWeight="700"
                  fill={theme.text}
                >
                  AL
                </text>
              </svg>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
