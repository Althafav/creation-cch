import Link from "next/link";
import Head from "next/head";
import React from "react";
import Globals from "../modules/Globals";
import Helper from "../modules/Helper";
import ContentMainComponent from "../components/ContentMainComponent";
import JsLoader from "../modules/JsLoader";
import { Projectspage } from "../models/projectspage";
import { Event } from "../models/event";

export default class HomePage extends React.Component<
    {},
    {
        pageData: Projectspage;
        isLoaded: boolean;
    }
> {

    constructor(props: any) {
        super(props);
        this.state = {
            pageData: new Projectspage(),
            isLoaded: false,
        }
    }


    componentDidMount() {
        Globals.KontentClient.item("project_page")
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
                    <div className="events section-wrapper">
                        <div className="row">
                            {
                                pageData.items.value.map((event: any) => {
                                    var eventItem: Event = event;
                                    return (
                                        <div className="col-md-6 col-lg-3">
                                            <div className="events-content-wrapper" style={{ background: "url(" + eventItem.image.value[0].url + ")" }}>
                                                <div className="events-content">
                                                    <h3>{eventItem.name.value}</h3>
                                                </div>
                                            </div>
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
