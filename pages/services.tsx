import Link from "next/link";
import Head from "next/head";
import React from "react";
import Globals from "../modules/Globals";
import Helper from "../modules/Helper";
import ContentMainComponent from "../components/ContentMainComponent";
import JsLoader from "../modules/JsLoader";
import { Servicespage } from "../models/servicespage";
import { Services } from "../models/services";

export default class HomePage extends React.Component<
    {},
    {
        pageData: Servicespage;
        isLoaded: boolean;
    }
> {

    constructor(props: any) {
        super(props);
        this.state = {
            pageData: new Servicespage(),
            isLoaded: false,
        }
    }


    componentDidMount() {
        Globals.KontentClient.item("services_page")
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

        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | ${pageData.pageTitle.value}`}</title>
                    <meta name="title" content={pageData.metaTitle.value} />
                    <meta name="description" content={pageData.metaDescription.value} />
                </Head>

                <ContentMainComponent title={pageData.bannerHeading.value}>
                    <div className="why-visit-wrap section-wrapper">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-heading">{pageData.heading.value}</h2>
                                <div className="text-justify m-b-15"
                                    dangerouslySetInnerHTML={{ __html: pageData.content.value }}

                                />
                            </div>
                        </div>

                        <div className="row">

                            {
                                pageData.items.value.map((p: any, index: number) => {
                                    var item: Services = p;
                                    return (
                                        <div className="col-12 col-md-6 col-lg-4 m-b-15 m-t-15">
                                            <Link passHref href={`/service/${item.system.id}`}  >
                                                <a>
                                                    <div className="services-tab-wrapper">
                                                        <div className="services-tab-bg" style={{ background: `url(${item.image.value[0].url})` }} />
                                                        <div className="services-body">
                                                            <h2 className="services-heading">{item.heading.value}</h2>
                                                            <p className="text-justify">{item.content.value}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </ContentMainComponent>
            </React.Fragment>
        );
    }
}
