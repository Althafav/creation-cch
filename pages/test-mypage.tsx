import Link from "next/link";
import Head from "next/head";
import React from "react";
import Globals from "../modules/Globals";
import Helper from "../modules/Helper";
import ContentMainComponent from "../components/ContentMainComponent";
import JsLoader from "../modules/JsLoader";
import { Testmodel } from "../models/testmodel";
import { Button } from "../models/button";
import { Testmymodel } from "../models/testmymodel";

export default class testing extends React.Component<
  {},
  {
    pageData: Testmymodel;
    isLoaded: boolean;
  }
> {

  constructor(props: any) {
    super(props);
    this.state = {
      pageData: new Testmymodel(),
      isLoaded: false,
    }
  }


  componentDidMount() {
    Globals.KontentClient.item("hero_my")
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

        <ContentMainComponent title="testmypage">
          <div className="section-wrapper">
            <div className="row">

{/* for the large text that includes html tags */}
              <div className="col-12">
                <div className="text-justify"
                  dangerouslySetInnerHTML={{ __html: pageData.content.value }}

                />
              </div>


              {/* {
                pageData.buttons.value.map((m: any) => {
                  var item: Button = m;
                  return (
                    <div className="col-12">
                      <a href={item.link.value} target={item.target.value == 1 ? "_blank" : "_self"}>{item.name.value}</a>
                    </div>
                  )
                })
              } */}

              {/* If you are retriving single image */}
              {/* {
  pageData.bannerImage.value[0].url
} */}



              {/* If you are retriving multiple image */}
              {/* {
                pageData.bannerImage.value.map((m: any) => {
                  return (
                    <div className="col-12">
                      <img src={m.url} />
                    </div>
                  )
                })
              } */}

            </div>
          </div>
        </ContentMainComponent>
      </React.Fragment>
    );
  }
}
