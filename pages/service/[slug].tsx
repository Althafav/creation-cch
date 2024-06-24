import Link from "next/link";
import Head from "next/head";
import React from "react";
import Globals from "../../modules/Globals";
import Helper from "../../modules/Helper";
import ContentMainComponent from "../../components/ContentMainComponent";
import { Services } from "../../models/services";
import JsLoader from "../../modules/JsLoader";

export default class HomePage extends React.Component<
    {},
    {
        pageData: Services;
        isLoaded: boolean;
    }
> {

    constructor(props: any) {
        super(props);
        this.state = {
            pageData: new Services(),
            isLoaded: false,
        }
    }


    componentDidMount() {
        const id = window.location.pathname.replace("/service/", "");
        Globals.KontentClient.items()
            .equalsFilter("system.id", id)
            .toObservable()
            .subscribe((response: any) => {
                this.setState({
                    pageData: response.firstItem,
                    isLoaded: true
                });

                JsLoader.loadFile(
                    `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
                    () => {
                        JsLoader.loadFile(`${Globals.BASE_URL}assets/js/homeBanner.js`);
                    },
                );
            });
    }


    render(): React.ReactNode {
        const { pageData, isLoaded } = this.state;
        if (!isLoaded) {
            return <React.Fragment />
        }

        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | ${pageData.heading.value}`}</title>
                    <meta name="title" content={pageData.heading.value} />
                    <meta name="description" content={pageData.heading.value} />
                </Head>

                <ContentMainComponent title={pageData.heading.value}>
                    <div className="service-wrap section-wrapper">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                {
                                    pageData.image.value.length>1?(
                                        <div id="ServiceSlider" className="owl-carousel service-tab-wrapper">
                                        {
                                            pageData.image.value.map((p: any, index: number) => {
                                                return (
                                                    <div className={`item`}>
                                                        <div className="service-bg" style={{ background: `url(${p.url})` }} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    ):(
                                        <div className="service-single-bg" style={{ background: `url(${pageData.image.value[0].url})` }} />
                                    )
                                }
                              
                            </div>
                            <div className="col-12 col-lg-6">
                                <h2 className="contact-heading text-left">{pageData.heading.value}</h2>

                                <div className="text-justify m-b-30"
                                    dangerouslySetInnerHTML={{ __html: pageData.brief.value }}

                                />

                                {
                                    pageData.btnLink.value ? (
                                        <a className="btn-red" href={pageData.btnLink.value} target="_blank">{pageData.btnLocale.value}</a>
                                    ) : ""
                                }
                            </div>
                        </div>
                    </div>
                </ContentMainComponent>
            </React.Fragment>
        );
    }
}
