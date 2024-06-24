import Link from "next/link";
import Head from "next/head";
import React from "react";
import Globals from "../modules/Globals";
import Helper from "../modules/Helper";
import ContentMainComponent from "../components/ContentMainComponent";
import { Home } from "../models/home";
import { Homebanner } from "../models/homebanner";
import JsLoader from "../modules/JsLoader";
import { Bannerstats } from "../models/bannerstats";
import { About } from "../models/about";
import { Services } from "../models/services";
import { Event } from "../models/event";
import { Clients } from "../models/clients";

export default class HomePage extends React.Component<
  {},
  {
    pageData: Home;
    isLoaded: boolean;
  }
> {

  constructor(props: any) {
    super(props);
    this.state = {
      pageData: new Home(),
      isLoaded: false,
    }
  }


  componentDidMount() {
    Globals.KontentClient.item("home_page")
      .toObservable()
      .subscribe((response: any) => {
        this.setState({
          pageData: response.item,
          isLoaded: true,
        });
      });
  }

  handleServices02() {
    $(".cp").css("display", "none");
    $(".is-content").css("display", "none");
    $(".cp-ce-click-2").css("display", "none");
    $(".s-is").css("display", "block");
    $(".s-cp").css("display", "none");
    $(".cp-content").css("display", "block");
    $(".cp-ce-click-1").css("display", "block");
  }
  handleServices03() {
    $(".is-content").css("display", "none");
    $(".cp-content").css("display", "none");
    $(".cp-ce-click-2").css("display", "none");
    $(".cp-ce-click-1").css("display", "none");
    $(".cp").css("display", "none");
    $(".ce").css("display", "none");
    $(".s-is").css("display", "block");
    $(".s-cp").css("display", "block");
    $(".ce-content").css("display", "block");
  }
  handleServices01() {
    $(".cp-ce-click-2").css("display", "block");
    $(".cp").css("display", "block");
    $(".ce").css("display", "block");
    $(".cp-ce-click-1").css("display", "none");
    $(".s-is").css("display", "none");
    $(".s-cp").css("display", "none");
    $(".is-content").css("display", "block");
    $(".cp-content").css("display", "none");
    $(".ce-content").css("display", "none");
  }
  handleServices022() {
    $(".s-cp").css("display", "none");
    $(".s-is").css("display", "block");
    $(".cp-content").css("display", "block");
    $(".is-content").css("display", "none");
    $(".ce-content").css("display", "none");
    $(".cp-ce-click-2").css("display", "none");
    $(".cp").css("display", "none");
    $(".cp-ce-click-1").css("display", "block");
    $(".ce").css("display", "block");
  }


  render(): React.ReactNode {
    const { pageData, isLoaded } = this.state;
    if (!isLoaded) {
      return <React.Fragment />
    }

    JsLoader.loadFile(
      `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
      () => {
        JsLoader.loadFile(`${Globals.BASE_URL}assets/js/homeBanner.js`);
      }
    );

    return (
      <React.Fragment>
        <Head>
          <title>{`${Globals.SITE_NAME} | ${pageData.pageTitle.value}`}</title>
          <meta name="title" content={pageData.pageTitle.value} />
          <meta name="description" content={pageData.pageTitle.value} />
        </Head>

        <main>
          <div id="HomeSlider" className="owl-carousel">
            {
              pageData.items.value.map((homeItem: any) => {
                var slider: Homebanner = homeItem;
                return (
                  <div className="item">
                    <div className="slider-bg" style={{ background: "url(" + `${slider.sliderImage.value[0].url}` + ")" }}></div>
                  </div>
                )
              })
            }
          </div>

          <div className="home-bannner-content-wrap">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h1 className="header-title">{pageData.bannerHeading.value}</h1>
                </div>
                <div className="col-12 col-lg-4">
                  {
                    pageData.bannerBtnLink.value ? (
                      <a href={pageData.bannerBtnLink.value} className="home-banner-btn">{pageData.bannerBtnLocale.value} <span className="m-l-10 mif-arrow-up-right"></span></a>
                    ) : ""
                  }

                </div>
              </div>
            </div>
          </div>



          <section className="summary">
            <div className="container">
              <div className="row">
                {
                  pageData.bannerStats.value.map((homeItem: any) => {
                    var bannerStat: Bannerstats = homeItem;
                    return (
                      <div className="col-md-3">
                        <p>{bannerStat.heading.value}</p>
                        <hr />
                        <h1>{bannerStat.value.value}</h1>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
          {/* <section className="description"> */}
          {
            pageData.homeAbout.value.map((aboutItem: any) => {
              var about: About = aboutItem;
              return (
                <div className="container about-section" id="about">
                  <div className="row">
                    <div className="col-12 col-md-6">
                    <p className="description-content"
                        dangerouslySetInnerHTML={{ __html: about.content.value }}
                      />
                    </div>
                    <div className="col-12 col-md-5">
                    {
                        about.youtubeLink.value ? (
                          <iframe className="decription-video" width="100%" height="300" src={about.youtubeLink.value}>
                          </iframe>
                        ) : ""
                      }
                    </div>
                    {/* <div className="col-md-12 decription-video-wrapper text-center">
                     
                    
                    </div> */}
                  </div>
                  {
                    about.btnLink.value ? (
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a href={about.btnLink.value} className="red-btn">
                            {about.btnLocale.value} <span className="mif-arrow-up-right"></span>
                          </a>
                        </div>
                      </div>
                    ) : ""
                  }

                </div>
              )
            })
          }

          {/* </section> */}
          <section className="individual-services" id="services">
            <div className="row">
              <div className="col-lg-1 s">
                <h2>Services</h2>
              </div>
              {
                pageData.services.value.map((s: any, index: any) => {
                  var service: Services = s;
                  console.log(index)
                  return (
                    <React.Fragment>
                      {
                        index == 0 ? (
                          <div className="col-lg-1 s-is" style={{ cursor: "pointer" }} onClick={(e) => this.handleServices01()}>
                            <h3 className="is-numbers"><span className="mif-arrow-up-right" ></span></h3>
                            <h3 className="is-numbers">{service.itemNumber.value}</h3>
                            <h2>{service.heading.value}</h2>
                          </div>
                        ) : ""
                      }
                      {
                        index == 1 ? (
                          <div className="col-lg-1 s-cp" style={{ cursor: "pointer" }} onClick={(e) => this.handleServices022()}>
                            <h3 className="is-numbers"><span className="mif-arrow-up-right" ></span></h3>
                            <h3 className="is-numbers">{service.itemNumber.value}</h3>
                            <h2>{service.heading.value}</h2>
                          </div>
                        ) : ""
                      }

                    </React.Fragment>
                  )
                })
              }


              {
                pageData.services.value.map((s: any, index: any) => {
                  var service: Services = s;
                  return (
                    <React.Fragment>
                      {
                        index == 0 ? (
                          <div className="col-lg-9 is-content">
                            <div className="is-text">
                              <h1>{service.itemNumber.value}</h1><h2>{service.heading.value}</h2>
                              <p>{service.content.value}</p>
                            </div>
                            {
                              service.btnLink.value ? (
                                <div className="is-bg" style={{ background: "url(" + `${service.image.value[0].url}` + ")" }}>
                                  <a href={service.btnLink.value} className="red-btn">
                                    {service.btnLocale.value} <span className="mif-arrow-up-right"></span>
                                  </a>
                                </div>
                              ) : ""
                            }

                          </div>
                        ) : ""
                      }
                      {
                        index == 1 ? (
                          <div className="col-lg-9 cp-content">
                            <div className="is-text">
                              <h1>{service.itemNumber.value}</h1><h2>{service.heading.value}</h2>
                              <p>{service.content.value}</p>
                            </div>
                            {
                              service.btnLink.value ? (
                                <div className="cp-bg" style={{ background: "url(" + `${service.image.value[0].url}` + ")" }}>
                                  <a href={service.btnLink.value} className="red-btn">
                                    {service.btnLocale.value} <span className="mif-arrow-up-right"></span>
                                  </a>
                                </div>
                              ) : ""
                            }

                          </div>
                        ) : ""
                      }
                      {
                        index == 2 ? (
                          <div className="col-lg-9 ce-content">
                            <div className="is-text">
                              <h1>{service.itemNumber.value}</h1><h2>{service.heading.value}</h2>
                              <p>{service.content.value}</p>
                            </div>
                            {
                              service.btnLink.value ? (
                                <div className="ce-bg" style={{ background: "url(" + `${service.image.value[0].url}` + ")" }}>
                                  <a href={service.btnLink.value} className="red-btn">
                                    {service.btnLocale.value} <span className="mif-arrow-up-right"></span>
                                  </a>
                                </div>
                              ) : ""
                            }
                          </div>
                        ) : ""
                      }
                    </React.Fragment>
                  )
                })
              }



              <div className="col-lg-2 cp-ce-click-2">
                <div className="row">
                {
            pageData.services.value.map((s: any, index: any) => {
              var service: Services = s;
              return (
                <React.Fragment>
                  {
                    index == 1 ? (
                      <div className="col-lg-6 cp" style={{ cursor: "pointer" }} onClick={(e) => this.handleServices02()}>
                      <h3 className="is-numbers"><span className="mif-arrow-up-right" id="cp" ></span></h3>
                      <h3 className="is-numbers">{service.itemNumber.value}</h3>
                      <h2>{service.heading.value}</h2>
                    </div>
                    ) : ""
                  }
                  {
                    index == 2 ? (
                      <div className="col-lg-6 ce" style={{ cursor: "pointer" }} onClick={(e) => this.handleServices03()}>
                      <h3 className="is-numbers"><span className="mif-arrow-up-right" id="ce" ></span></h3>
                      <h3 className="is-numbers">{service.itemNumber.value}</h3>
                      <h2>{service.heading.value}</h2>
                    </div>
                    ) : ""
                  }


                </React.Fragment>
              )
            })
          }
                 
                
                </div>
              </div>
              <div className="col-lg-1 cp-ce-click-1">
                <div className="row">
                {
            pageData.services.value.map((s: any, index: any) => {
              var service: Services = s;
              return (
                <React.Fragment>
                  {
                    index == 1 ? (
                      <div className="col-lg-12 cp" style={{ cursor: "pointer" }} onClick={(e) => this.handleServices02()}>
                      <h3 className="is-numbers"><span className="mif-arrow-up-right" id="cp" ></span></h3>
                      <h3 className="is-numbers">{service.itemNumber.value}</h3>
                      <h2>{service.heading.value}</h2>
                    </div>
                    ) : ""
                  }
                  {
                    index == 2 ? (
                      <div className="col-lg-12 ce" style={{ cursor: "pointer" }} onClick={(e) => this.handleServices03()}>
                      <h3 className="is-numbers"><span className="mif-arrow-up-right" id="ce" ></span></h3>
                      <h3 className="is-numbers">{service.itemNumber.value}</h3>
                      <h2>{service.heading.value}</h2>
                    </div>
                    ) : ""
                  }


                </React.Fragment>
              )
            })
          }
                 
                 
                </div>
              </div>
            </div>
          </section>
          <section className="latest-projects" id="projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Latest Projects</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h2>{pageData.heroProjectHeading.value}</h2>
                </div>
              </div>
              <div className="row">
                {
                  pageData.heroProjectYoutubeLink.value?(
                    <div className="col-12 col-lg-7 col-md-6">
                    <iframe width="100%" height="500" src={pageData.heroProjectYoutubeLink.value}>
                    </iframe>
                  </div>
                  ):""
                }
              
                <div className="col-12 col-lg-5 col-md-6">
                  {
                    pageData.heroProjectContent.value?(
                      <p
                      dangerouslySetInnerHTML={{ __html: pageData.heroProjectContent.value }}
                    />
                    ):""
                  }
                </div>
              </div>
            </div>
          </section>
          <section className="events">
            <div className="row">
              {
                pageData.eventitem.value.map((event:any)=>{
                  var eventItem:Event=event;
                  return(
                    <div className="col-md-6 col-lg-3">
                    <div className="events-content-wrapper" style={{ background: "url("+eventItem.image.value[0].url+")" }}>
                      <div className="events-content">
                        <h3>{eventItem.name.value}</h3>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </section>
          <div className="our-clients-wrapper" id="clients">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>Our Clients</h1>
                </div>
              </div>
              <div className="row">
                {
                  pageData.ourClients.value.map((client:any)=>{
                    var clientItem:Clients = client;
                    return(
                      <div className="col-12 col-md-4 col-lg-3">
                      <a href={clientItem.websiteLink.value} target="_blank">
                        <div className="client-wrappper" style={{ background: "url("+clientItem.logo.value[0].url+")" }}></div>
                      </a>
                    </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
