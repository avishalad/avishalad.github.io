import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import { Document, Page, pdfjs } from "react-pdf";
import { Fade } from "react-reveal";
import { recommendations } from "../../portfolio";
import "./RecommendationViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const lorFiles = {
  "dr-decker": require("../../assets/docs/LOR_Dr.Decker_BGSU.pdf"),
  "dr-green": require("../../assets/docs/LOR_Dr.Green_BGSU.pdf"),
  "dr-roy": require("../../assets/docs/LOR_Dr.Roy_BGSU.pdf"),
};

export default class RecommendationViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageWidth: null,
      numPages: null,
      currentPage: 1,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.setPageWidth();
    window.addEventListener("resize", this.setPageWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setPageWidth);
  }

  setPageWidth = () => {
    const width = window.innerWidth;
    let pageWidth;

    if (width > 1200) {
      pageWidth = 900;
    } else if (width > 768) {
      pageWidth = 680;
    } else {
      pageWidth = width * 0.9;
    }

    this.setState({ pageWidth });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({
      numPages,
      isLoading: false,
      error: null,
    });
  };

  onDocumentLoadError = () => {
    this.setState({
      error: "Failed to load the letter. Please try again later.",
      isLoading: false,
    });
  };

  goToPreviousPage = () => {
    this.setState((prevState) => ({
      currentPage: Math.max(prevState.currentPage - 1, 1),
    }));
  };

  goToNextPage = () => {
    this.setState((prevState) => ({
      currentPage: Math.min(prevState.currentPage + 1, prevState.numPages),
    }));
  };

  render() {
    const theme = this.props.theme;
    const { pageWidth, numPages, currentPage, isLoading, error } = this.state;
    const id = this.props.match.params.id;
    const item = recommendations.items.find((rec) => rec.id === id);
    const file = lorFiles[id];

    return (
      <div className="recommendation-main">
        <Header theme={theme} />
        <div className="recommendation-view">
          <Fade bottom duration={2000} distance="40px">
            <div>
              <h1 className="recommendation-title" style={{ color: theme.text }}>
                {item ? item.name : "Letter of Recommendation"}
              </h1>
              {file && (
                <div className="download-btn">
                  <Button
                    text="Download Letter"
                    newTab={false}
                    href={file}
                    download={item ? item.file : "LOR.pdf"}
                    theme={theme}
                  />
                </div>
              )}

              {isLoading && !error && (
                <div className="recommendation-loading">
                  <div className="loading-spinner"></div>
                  <p>Loading letter...</p>
                </div>
              )}

              {error && (
                <div className="recommendation-error">
                  <p>{error}</p>
                </div>
              )}

              {!error && file && (
                <div className="recommendation-doc">
                  <Document
                    file={file}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={this.onDocumentLoadError}
                  >
                    <Page pageNumber={currentPage} width={pageWidth} />
                  </Document>
                </div>
              )}

              {numPages && (
                <div className="recommendation-controls">
                  <button
                    className="control-btn"
                    onClick={this.goToPreviousPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <span className="page-indicator">
                    Page {currentPage} of {numPages}
                  </span>
                  <button
                    className="control-btn"
                    onClick={this.goToNextPage}
                    disabled={currentPage === numPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
