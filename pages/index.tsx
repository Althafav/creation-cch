import Link from "next/link";
import Head from "next/head";
import React from "react";
import Globals from "../modules/Globals";
import Helper from "../modules/Helper";
import ContentMainComponent from "../components/ContentMainComponent";
import JsLoader from "../modules/JsLoader";
import { Bannerstats } from "../models/bannerstats";
import { Homerevamp } from "../models/homerevamp";
import { Homebannertabs } from "../models/homebannertabs";
import { Homeprojects } from "../models/homeprojects";
import { Homeadvertise } from "../models/homeadvertise";
import { url } from "inspector";
import { Portfolioitems } from "../models/portfolioitems";
import { Ourserviceitemrevamp } from "../models/ourserviceitemrevamp";
import { Testhomerevamp } from "../models/testhomerevamp";
import { Button } from "../models/button";

export default class HomePage extends React.Component<
  {},
  {
    pageData: Testhomerevamp;
    isLoaded: boolean;
    showModal: boolean;
    activeTab: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      pageData: new Testhomerevamp(),
      isLoaded: false,
      showModal: false,
      activeTab: "Exhibitions",
    };
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    Globals.KontentClient.item("testhomepagerevamp")
      .toObservable()
      .subscribe((response: any) => {
        this.setState({
          pageData: response.item,
          isLoaded: true,
        });

        JsLoader.loadFile(
          `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
          () => {
            JsLoader.loadFile(`${Globals.BASE_URL}assets/js/homeBanner.js`);
            JsLoader.loadFile(
              `${Globals.BASE_URL}assets/js/galleryCarousel.js`
            );
          }
        );
      });
  }

  handleTabClick = (name: string) => {
    this.setState({ activeTab: name });
  };

  render(): React.ReactNode {
    const { pageData, isLoaded, showModal, activeTab } = this.state;
    if (!isLoaded) {
      return <React.Fragment />;
    }

    try {
      JsLoader.loadFile(`${Globals.BASE_URL}assets/js/formhandler.js`);
    } catch (e) {}

    return (
      <React.Fragment>
        <Head>
          <title>{`${Globals.SITE_NAME} | ${pageData.pageTitle.value}`}</title>
          <meta name="title" content={pageData.metaTitle.value} />
          <meta name="description" content={pageData.metaDescription.value} />
        </Head>

        <div className="home-banner-wrappper">
          {/* <img src={"/assets/imgs/home-banner2.jpg"} /> */}
          {pageData.bannerImage.value[0] ? (
            <img className="hero-img" src={pageData.bannerImage.value[0].url} />
          ) : (
            ""
          )}
          <div className="banner-inner-content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="">{pageData.bannerHeading.value}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-wrapper" id="services">
          <div className="container">
            <div className="row">
              <div className="col-12  text-center">
                <h2>{pageData.ourServicesHeading.value}</h2>
              </div>
            </div>
            <div className="row gap-5 justify-content-center">
              {pageData.ourServicesItem.value.map((m: any) => {
                var item: Ourserviceitemrevamp = m;
                return (
                  <div className="col-12 col-md-6 col-lg-3 m-t-10 m-b-10 ">
                    <div className="service-img-wrapper">
                      <img src={item.images.value[0].url} alt="" />
                      <p>{item.name.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="portfoli-wrapper" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-white">
                  {pageData.portfolioHeading.value}
                </h2>
              </div>
            </div>

            <div className="row ">
              <div className="row">
                <div className="col-12">
                  <ul className="text-white text-center ">
                    {pageData.portfolioItem.value.map(
                      (m: any, index: number) => {
                        var item: Portfolioitems = m;

                        return (
                          <li
                            className={`portfoli-btn ${
                              activeTab === item.name.value ? "active" : ""
                            }`}
                            key={index}
                            onClick={() => this.handleTabClick(item.name.value)}
                          >
                            {item.name.value}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="row pt-5">
              {pageData.portfolioItem.value.map((m: any, index: number) => {
                var item: Portfolioitems = m;

                return (
                  <React.Fragment key={index}>
                    {activeTab === item.name.value &&
                      item.image.value.map((image: any, index: number) => {
                        return (
                          <div className="col-12 col-md-4 m-t-10 m-b-10">
                            <div className="portfolio-img-wrapper">
                              <img key={index} src={image.url} alt="" />;
                            </div>
                          </div>
                        );
                      })}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <div className="req-or-join-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 text-center m-b-10">
                <div className="container">
                  <a className="w-75" onClick={this.handleShowModal}>
                    <div className="req-or-join-btn">Request a Proposal</div>
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-6 m-b-10 text-center vertical-line">
                <div className="container">
                  {pageData.portfolioButtons.value.map((m: any) => {
                    var item: Button = m;
                    return (
                      <a href={item.link.value} target={item.target.value == 1?"_blank":"_self"} className=" w-75">
                        <div className="req-or-join-btn">{item.name.value}</div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* popup modal */}
          {showModal && (
            <div className="pop-up-wrapper" id="request-proposal">
              <div className="pop-up-content">
                <div className="container">
                  <button
                    onClick={this.handleCloseModal}
                    className="modal-close-icon"
                  >
                    <i
                      className="fa fa-times text-white"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <form
                    method="POST"
                    action="https://strategic31677.activehosted.com/proc.php"
                    id="_form_444_"
                    className="_form _form_444 _inline-form  _dark "
                    noValidate
                    data-styles-version="5"
                  >
                    <input type="hidden" name="u" value="444" />
                    <input type="hidden" name="f" value="444" />
                    <input type="hidden" name="s" />
                    <input type="hidden" name="c" value="0" />
                    <input type="hidden" name="m" value="0" />
                    <input type="hidden" name="act" value="sub" />
                    <input type="hidden" name="v" value="2" />
                    <input
                      type="hidden"
                      name="or"
                      value="029f1c2b827fccf7b5a1a3d99db6e599"
                    />
                    <input
                      type="hidden"
                      name="field[38]"
                      value="Creation House - Request A Proposal"
                    />
                    <div className="_form-content  row popup-form">
                      <div className="col-md-6 m-t-10 m-b-10">
                        <label htmlFor="firstname" className="_form-label">
                          First Name*
                        </label>
                        <div className="_field-wrapper">
                          <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            className="form-control"
                            placeholder="Type your first name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 m-t-10 m-b-10">
                        <label htmlFor="lastname" className="_form-label">
                          Last Name*
                        </label>
                        <div className="_field-wrapper">
                          <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            className="form-control"
                            placeholder="Type your last name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 m-t-10 m-b-10">
                        <label htmlFor="field[12]" className="_form-label">
                          Mobile Phone*
                        </label>
                        <div className="_field-wrapper">
                          <input
                            type="text"
                            id="field[12]"
                            name="field[12]"
                            className="form-control"
                            placeholder="Mobile Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 m-t-10 m-b-10">
                        <label htmlFor="email" className="_form-label">
                          Email*
                        </label>
                        <div className="_field-wrapper">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Type your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 m-t-10 m-b-10">
                        <label
                          htmlFor="customer_account"
                          className="_form-label"
                        >
                          Company*
                        </label>
                        <div className="_field-wrapper">
                          <input
                            type="text"
                            id="customer_account"
                            name="customer_account"
                            className="form-control"
                            placeholder="Type your account"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 m-t-10 m-b-10">
                        <label htmlFor="field[353]" className="_form-label">
                          Event Date
                        </label>
                        <div className="_field-wrapper">
                          <input
                            type="date"
                            className="date_field form-control text-white"
                            id="field[353]"
                            name="field[353]"
                            placeholder="Event Date"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 m-t-10 m-b-10">
                        <label htmlFor="field[354]" className="_form-label">
                          Event Location
                        </label>
                        <div className="_field-wrapper">
                          <input
                            type="text"
                            id="field[354]"
                            name="field[354]"
                            className="form-control"
                            placeholder="Event Location"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 m-t-10 m-b-10">
                        <label htmlFor="field[355]" className="_form-label">
                          Event Duration
                        </label>
                        <div className="_field-wrapper">
                          <input
                            type="text"
                            id="field[355]"
                            name="field[355]"
                            className="form-control"
                            placeholder="Event Duration"
                          />
                        </div>
                      </div>
                      <div className="col-12 text-center m-t-10 m-b-10">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"
                        ></div>
                        <button
                          id="_form_444_submit"
                          className="_submit popup-submit-btn"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="_clear-element"></div>
                    <div
                      className="_form-thank-you"
                      style={{ display: "none" }}
                    ></div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          id="contact-us"
          className="get-in-touch-wrapper"
          style={{ backgroundImage: `url("/assets/imgs/getintouch.png")` }}
        >
          <div className="contianer get-in-touch-form">
            <form
              method="POST"
              action="https://strategic31677.activehosted.com/proc.php"
              id="_form_444_"
              className="_form _form_444 _inline-form  _dark"
              noValidate
              data-styles-version="5"
            >
              <input type="hidden" name="u" value="444" />
              <input type="hidden" name="f" value="444" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input
                type="hidden"
                name="or"
                value="029f1c2b827fccf7b5a1a3d99db6e599"
              />
              <input
                type="hidden"
                name="field[38]"
                value="Creation House - Get In Touch"
              />

              <div className="row ">
                <div className="col-12 m-t-12">
                  <h2 className="text-white text-center">
                    {pageData.getInTouch.value}
                  </h2>
                </div>
              </div>

              <div className="get-in-touch-form-body ">
                <div className="row text-white _form-content">
                  <div className="col-12 col-lg-4 m-t-10 m-b-10">
                    <label htmlFor="firstname" className="_form-label">
                      First Name
                      <span className="text-danger">*</span>
                    </label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Type your first name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-4 m-t-10 m-b-10">
                    <label htmlFor="lastname" className="_form-label">
                      Last Name
                      <span className="text-danger">*</span>
                    </label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Type your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-4 m-t-10 m-b-10">
                    <label htmlFor="customer_account" className="_form-label">
                      Company
                      <span className="text-danger">*</span>
                    </label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="customer_account"
                        name="customer_account"
                        placeholder="Type your account"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 m-t-10 m-b-10">
                    <label htmlFor="field[284]" className="_form-label">
                      Event Name
                      <span className="text-danger">*</span>
                    </label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="field[284]"
                        name="field[284]"
                        placeholder="Event Name"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-4 m-t-10 m-b-10">
                    <label htmlFor="field[12]" className="_form-label">
                      Mobile Phone
                      <span className="text-danger">*</span>
                    </label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="field[12]"
                        name="field[12]"
                        placeholder="123 xxxxxxx"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-4 m-t-10 m-b-10">
                    <label htmlFor="email" className="_form-label">
                      Email
                      <span className="text-danger">*</span>
                    </label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Type your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-4 m-t-10 m-b-10">
                    <label htmlFor="field[350]" className="_form-label">
                      Budget
                    </label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="field[350]"
                        name="field[350]"
                        placeholder="Your Budget"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 m-t-10 m-b-10">
                    <label htmlFor="field[351]" className="_form-label">
                      Square Meters
                    </label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="field[351]"
                        name="field[351]"
                        placeholder="Square Meters"
                      />
                    </div>
                  </div>

                  <div className="col-12 m-t-10 m-b-10 _form-fieldset">
                    <p className="text-white font-weight-bold">Are you:</p>

                    <div className="form-check form-check-inline mr-5">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="field_352Agency"
                        name="field[352]"
                        value="Agency"
                        checked
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="field_352Agency"
                      >
                        Agency
                      </label>
                    </div>

                    <div className="form-check form-check-inline mr-5">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="field_352Exhibitor"
                        name="field[352]"
                        value="Exhibitor"
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="field_352Exhibitor"
                      >
                        Exhibitor
                      </label>
                    </div>

                    <div className="form-check form-check-inline mr-5">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="field_352Event Organizer"
                        name="field[352]"
                        value="Event Organizer"
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="field_352Event Organizer"
                      >
                        EventOrganizer
                      </label>
                    </div>

                    <div className="form-check form-check-inline mr-5">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="field_352Other"
                        name="field[352]"
                        value="Other"
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="field_352Other"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                  <div className="col-12 m-t-10 m-b-10">
                    <textarea
                      id="field[6]"
                      name="field[6]"
                      rows={4}
                      className="form-control"
                      placeholder="Your Message"
                      required
                    />
                  </div>

                  <div className="col-12 m-t-10 m-b-10 text-center">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"
                    ></div>
                    <button
                      id="_form_444_submit"
                      className="get-in-touch-submit-btn _submit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>

                  <div className="_clear-element"></div>
                  <div
                    className="_form-thank-you"
                    style={{ display: "none" }}
                  ></div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="Download-catelogue-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex justify-content-center align-items-center">
                <img src={pageData.catelogueImage.value[0].url} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <form
                method="POST"
                action="https://strategic31677.activehosted.com/proc.php"
                id="_form_444_"
                className="_form _form_444 _inline-form  _dark row"
                noValidate
                data-styles-version="5"
              >
                <input type="hidden" name="u" value="444" />
                <input type="hidden" name="f" value="444" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input
                  type="hidden"
                  name="or"
                  value="029f1c2b827fccf7b5a1a3d99db6e599"
                />
                <input
                  type="hidden"
                  name="field[38]"
                  value="Creation House - Download Our Catalogue"
                />
                <div className="col-12">
                  <h2 className="">
                    {pageData.catelogueHeading.value}
                    <hr className="line" />
                  </h2>
                </div>
                <div className="col-lg-6 m-t-10 m-b-10">
                  <label htmlFor="firstname">
                    First Name
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-lg-6 m-t-10 m-b-10">
                  <label htmlFor="lastname">
                    Last Name
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-lg-6 m-t-10 m-b-10 ">
                  <label htmlFor="email">
                    Email
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Type your email"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-lg-6 m-t-10 m-b-10 ">
                  <label htmlFor="Company">
                    Company
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="customer_account"
                    name="customer_account"
                    placeholder="Type your company"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-lg-6 m-t-10 m-b-10">
                  <label htmlFor="field[12]">
                    Mobile Number
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    id="field[12]"
                    name="field[12]"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-12 text-center">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"
                  ></div>
                  <button
                    id="_form_444_submit"
                    className="download-cat-btn _submit"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>

                <div className="_clear-element"></div>

                <div
                  className="_form-thank-you"
                  style={{ display: "none" }}
                ></div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
