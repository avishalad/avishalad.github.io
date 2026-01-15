import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import { Link } from "react-router-dom";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import { recommendations } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification, Certifications, and LORs
                </h3>
                <p className="heading-subtext-detail" style={{ color: theme.text }}>
                  Formal training in computer science and applied engineering, complemented by cloud and AI upskilling
                  and academic letters of recommendation that reflect performance, leadership, and impact.
                </p>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
          {recommendations.items.length > 0 ? (
            <div className="recommendations-section">
              <h3 className="recommendations-heading" style={{ color: theme.text }}>
                {recommendations.title}
              </h3>
              <div className="recommendations-grid">
                {recommendations.items.map((item) => (
                  <Link
                    key={item.file}
                    className="recommendations-card"
                    to={`/recommendations/${item.id}`}
                  >
                    <div className="recommendations-card-title">
                      <div className="recommendations-name">
                        {item.name.split(",")[0]}
                      </div>
                      <div className="recommendations-school">
                        {item.name.split(",")[1]
                          ? item.name.split(",")[1].trim()
                          : ""}
                      </div>
                    </div>
                    <div className="recommendations-card-cta">View letter</div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
