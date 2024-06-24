import Link from "next/link";
import Head from "next/head";
import React from "react";
import Globals from "../modules/Globals";
import Helper from "../modules/Helper";
import ContentMainComponent from "../components/ContentMainComponent";
import JsLoader from "../modules/JsLoader";

export default class HomePage extends React.Component<
  {},
  {
  }
> {

  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {

    return (
      <React.Fragment>
        <Head>
        <title>{`${Globals.SITE_NAME} | Registration Packages`}</title>
                    <meta name="title" content="I am attending Annual Investment Meeting. Register & join me!" />
                    <meta name="description" content="I am attending Annual Investment Meeting. Register & join me!" />
					<meta name="image" content={`${Globals.BASE_URL}assets/imgs/linkedin-share.png`} />

                    <meta property="og:title" content="I am attending Annual Investment Meeting. Register & join me!" />
                    <meta property="og:description" content="I am attending Annual Investment Meeting. Register & join me!" />
                    <meta property="og:url" content={`${Globals.BASE_URL}register`} />
                    <meta property="og:image" content={`${Globals.BASE_URL}assets/imgs/linkedin-share.png`} />
					 <meta property="og:image:secure_url" content={`${Globals.BASE_URL}assets/imgs/linkedin-share.png`} />
					 <meta property="og:image:width" content="500" />
				<meta property="og:image:height" content="261" />
        </Head>

   <ContentMainComponent title="Contact us">
    <div className="contact-wrapper">
  <div className="row">
    <div className="col-12">
        <p>Okay</p>
    </div>
  </div>
  </div>
   </ContentMainComponent>
      </React.Fragment>
    );
  }
}
