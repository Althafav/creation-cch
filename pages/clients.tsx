import Link from "next/link";
import Head from "next/head";
import React from "react";
import Globals from "../modules/Globals";
import Helper from "../modules/Helper";
import ContentMainComponent from "../components/ContentMainComponent";
import JsLoader from "../modules/JsLoader";
import { Clientspage } from "../models/clientspage";
import { Clients } from "../models/clients";

export default class HomePage extends React.Component<
    {},
    {
        pageData: Clientspage;
        isLoaded: boolean;
    }
> {

    constructor(props: any) {
        super(props);
        this.state = {
            pageData: new Clientspage(),
            isLoaded: false,
        }
    }


    componentDidMount() {
        Globals.KontentClient.item("clients_page")
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
                    <div className="our-clients-wrapper section-wrapper">
                        <div className="row">
                            {
                                pageData.items.value.map((client: any) => {
                                    var clientItem: Clients = client;
                                    if (
                                        clientItem.logo.value[0]
                                    ) {
                                        return (
                                            <div className="col-12 col-md-4 col-lg-3">
                                                <a href={clientItem.websiteLink.value ? clientItem.websiteLink.value : "javascript:0"} target={clientItem.websiteLink.value ? "_blank" : "_self"}>
                                                    <div className="client-wrappper" style={{ background: "url(" + clientItem.logo.value[0].url + ")" }}></div>
                                                </a>
                                            </div>
                                        )
                                    }

                                })
                            }
                        </div>
                    </div>
                </ContentMainComponent>
            </React.Fragment>
        );
    }
}
