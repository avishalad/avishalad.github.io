import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                {ContactData["description"] && (
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {ContactData["description"]}
                  </p>
                )}
                {ContactData.contactItems && (
                  <ul className="contact-bullets">
                    {ContactData.contactItems.map((item) => (
                      <li key={item.label}>
                        <span className="icon-button" aria-hidden="true">
                          <i
                            className={`${item.iconPrefix} ${item.icon}`}
                            title={item.label}
                            style={{ backgroundColor: item.backgroundColor }}
                          ></i>
                        </span>{" "}
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    href="/resume"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
