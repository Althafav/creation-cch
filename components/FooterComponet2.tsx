import Link from "next/link";
import React from "react";
import { Footer } from "../models/footer";
import { Footeritem } from "../models/footeritem";
import Globals from "../modules/Globals";
import JsLoader from "../modules/JsLoader";
import { Footerrevamp } from "../models/footerrevamp";
import { Button } from "../models/button";

export default class FooterComponent extends React.Component<
  {},
  {
    pageData: Footerrevamp;
    isLoaded: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      pageData: new Footerrevamp(),
      isLoaded: false,
    };
  }

  componentDidMount() {
    Globals.KontentClient.item("footer_revamp")
      .toObservable()
      .subscribe((response: any) => {
        this.setState({
          pageData: response.item,
          isLoaded: true,
        });
      });
  }

  render(): React.ReactNode {
    const { pageData, isLoaded } = this.state;
    if (!isLoaded) {
      return <React.Fragment />;
    }

    // JsLoader.loadFile(`${Globals.BASE_URL}assets/js/contactus.js`);

    return (
      <React.Fragment>
        <footer className="footer-wrapper text-white">
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="row">
                  <hr className="line mb-5" />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="company-logo-wrapper">
                  {pageData.companyLogo.value[0] ? (
                    <a href="/">
                      <img
                        className="company-logo"
                        src={pageData.companyLogo.value[0].url}
                      />
                    </a>
                  ) : (
                    ""
                  )}
                  <ul className="d-flex gap-3">
                    <li>
                      <a href={pageData.linkedinLink.value} target="_blank">
                        <img
                          src="/assets/imgs/logo/linkedin-white.svg"
                          className="brand-logo"
                        />
                      </a>
                    </li>

                    <li>
                      <a href={pageData.instagramLink.value} target="_blank">
                        <img
                          src="/assets/imgs/logo/instagram-white.svg"
                          className="brand-logo"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <ul>
                  {pageData.menuSection1.value.map((m: any, index: number) => {
                    var item: Button = m;
                    return (
                      <li key={index}>
                        <a href={item.link.value} className="text-white">
                          {item.name.value}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-3">
                <ul>
                  {pageData.menuSection2.value.map((m: any, index: number) => {
                    var item: Button = m;
                    return (
                      <li key={index}>
                        <a href={item.link.value} className="text-white">
                          {item.name.value}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-3 ">
                <div className="d-flex flex-column gap-3 flex-column">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex align-items-center gap-3 justify-content-md-end">
                      <img
                        src={"/assets/imgs/logo/phone.svg"}
                        alt=""
                        className="contact-logo"
                      />
                      {pageData.contactNumber.value}
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-md-end">
                      <img
                        src={"/assets/imgs/logo/mail.svg"}
                        alt=""
                        className="contact-logo"
                      />
                      {pageData.emailAddress.value}
                    </div>

                    <div className="talk-to-expert-btn-wrapper d-flex justify-content-md-end">
                      {pageData.footerButton.value.map(
                        (m: any, index: number) => {
                          var item: Button = m;
                          return (
                            <a
                              href={item.link.value}
                              className="talk-to-expert-btn"
                              target={
                                item.target.value === 1 ? "_blank" : "_self"
                              }
                            >
                              {item.name.value}
                              <img
                                src={"/assets/imgs/logo/phone.svg"}
                                alt=""
                                className="contact-logo"
                              />
                            </a>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <hr className="line mt-4" />
              </div>
              <div className="col-12">
                <p className="text-md-end text-white">
                  {pageData.allRightsReserevedText.value}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
