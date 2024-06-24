import Link from "next/link";
import React from "react";
import { Footer } from "../models/footer";
import { Footeritem } from "../models/footeritem";
import Globals from "../modules/Globals";
import JsLoader from "../modules/JsLoader";

export default class FooterComponent extends React.Component<
    {},
    {
        pageData: Footer;
        isLoaded: boolean;
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            pageData: new Footer(),
            isLoaded: false
        };
    }

    componentDidMount() {
        Globals.KontentClient.item("footer")
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
            return <React.Fragment />
        }

        JsLoader.loadFile(`${Globals.BASE_URL}assets/js/contactus.js`);

        return (
            <React.Fragment>
                <div className="row trend-wrap d-none">
                    {
                        pageData.footerImage.value[0] ? (
                            <div className="col-12 col-lg-4 trend-bg" style={{ background: `url(${pageData.footerImage.value[0].url})` }}></div>
                        ) : ""
                    }
                    <div className="col-12 col-lg-4 p-0">
                        <div className="bg-color trend-heading-wrap">
                            <div className="trend-content">
                                <h2>{pageData.heading.value}</h2>
                            </div>
                        </div>
                        <div className="trend-contact-us-wrap">
                            <div className="trend-contact-us-content">
                                <p className="heading">Contact Us</p>
                                <p className="address">{pageData.address.value}</p>

                                <ul className="icon-wrap">
                                    {
                                        pageData.linkedinLink.value ? (
                                            <li>
                                                <a href={pageData.linkedinLink.value} target="_blank">
                                                    <img src="/assets/imgs/logo/linkedin-white.svg" />
                                                </a>
                                            </li>
                                        ) : ""
                                    }

                                    {
                                        pageData.instagramLink.value ? (
                                            <li>
                                                <a href={pageData.instagramLink.value} target="_blank">
                                                    <img src="/assets/imgs/logo/instagram-white.svg" />
                                                </a>
                                            </li>
                                        ) : ""
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 trend-heading-wrap-section">
                        <div className="trend-heading-content">
                            <p>{pageData.footerTrendLabel.value}</p>
                            <h2>{pageData.footerTrendHeading.value}</h2>
                        </div>
                    </div>
                </div>

                <div className="contact-wrapper section-wrapper" id="contact-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-heading">Contact us</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <form method="POST" action="//ac.strategic.ae/proc.php" id="_form_444_" className="_form _form_444 _inline-form  _dark" noValidate>
                                    <input type="hidden" name="u" value="444" />
                                    <input type="hidden" name="f" value="444" />
                                    <input type="hidden" name="s" />
                                    <input type="hidden" name="c" value="0" />
                                    <input type="hidden" name="m" value="0" />
                                    <input type="hidden" name="act" value="sub" />
                                    <input type="hidden" name="v" value="2" />
                                    <input type="hidden" name="or" value="9fe57d64887f844cd1acb734cda88c73" />
                                    <input type="hidden" name="field[38]" value="Creation House - Contact us" />
                                    <div className="_form-content">
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <input
                                                    type="text"
                                                    id="firstname" name="firstname"
                                                    className="form-control"
                                                    placeholder="First Name *"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <input
                                                    type="text"
                                                    id="lastname" name="lastname"
                                                    className="form-control"
                                                    placeholder="Last Name *"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <input
                                                    type="text"
                                                    id="customer_account" name="customer_account"
                                                    className="form-control"
                                                    placeholder="Organization *"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <input
                                                    type="text"
                                                    id="email" name="email"
                                                    className="form-control"
                                                    placeholder="Email *"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <input
                                                    type="text"
                                                    id="field[12]" name="field[12]"
                                                    className="form-control"
                                                    placeholder="Mobile Phone *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <textarea id="field[6]" name="field[6]" placeholder="Message" className="form-control" required></textarea>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12">
                                                <div className="g-recaptcha" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go">
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <button
                                                    id="_form_444_submit"
                                                    type="submit"
                                                    className="submit-red-btn"
                                                >
                                                    <span>Submit</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="_form-thank-you success"
                                        style={{ display: "none" }}
                                    ></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="footer-container">
                            <div className="row">
                                <div className="col-12 col-lg-2">
                                    <div className="footer-logo-container">
                                        <a href="/">
                                            <img src={pageData.logo.value[0].url} className="footer-logo" />
                                        </a>
                                        <ul className="footer-icon-wrapper">
                                            <li>
                                                {
                                                    pageData.linkedinLink.value ? (
                                                        <a href={pageData.linkedinLink.value} target="_blank">
                                                            <img className="footer-icon" src="/assets/imgs/logo/linkedin.png" />
                                                        </a>
                                                    ) : ""
                                                }

                                                {
                                                    pageData.instagramLink.value ? (
                                                        <a href={pageData.instagramLink.value} target="_blank">
                                                            <img className="footer-icon" src="/assets/imgs/logo/instagram.png" />
                                                        </a>
                                                    ) : ""
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10">
                                    <div className="footer-menu-container">
                                        <ul>
                                            {
                                                pageData.items.value.map((footer: any) => {
                                                    var footerItem: Footeritem = footer;
                                                    return (
                                                        <li><a href={footerItem.link.value}>{footerItem.name.value}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <p>{pageData.content.value}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-3">
                                    <p className="email">{pageData.email.value}</p>
                                </div>
                                <div className="col-lg-8 col-md-9">
                                    <p className="phone">{pageData.contactNo.value}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
