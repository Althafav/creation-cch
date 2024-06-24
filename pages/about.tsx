import Link from "next/link";
import Head from "next/head";
import React from "react";
import Globals from "../modules/Globals";
import Helper from "../modules/Helper";
import ContentMainComponent from "../components/ContentMainComponent";
import JsLoader from "../modules/JsLoader";
import { About } from "../models/about";

export default class HomePage extends React.Component<
  {},
  {
    pageData: About;
    isLoaded: boolean;
  }
> {

  constructor(props: any) {
    super(props);
    this.state = {
      pageData: new About(),
      isLoaded: false,
    }
  }


  componentDidMount() {
    Globals.KontentClient.item("about")
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
          <div className="section-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="text-justify"
                    dangerouslySetInnerHTML={{ __html: pageData.content.value }}

                  />
                </div>
              </div>

              {
                pageData.btnLink.value ? (
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <a href={pageData.btnLink.value} target="_blank" className="red-btn">{pageData.btnLocale.value} 
                      <span className="mif-arrow-up-right"></span>
                      </a>
                    </div>
                  </div>
                ) : ""
              }

              {
                pageData.youtubeLink.value ? (
                  <iframe className="about-video" src={pageData.youtubeLink.value}>
                  </iframe>
                ) : ""
              }
            </div>
          </div>
        </ContentMainComponent>
      </React.Fragment>
    );
  }
}
