import React from "react";
import Globals from "../modules/Globals";

export default function ContentMainComponent(props: any) {
  const bannerURL =
    props.banner && props.banner.length
      ? props.banner[0].url
      : `${Globals.BASE_URL}assets/imgs/inner-banner.png`;
  return (
    <React.Fragment>
      <div className="inner-banner-wrapper m-0">
          <img src={bannerURL} alt="inner_banner" className="inner-banner" />
         <div className={props.bannertop==true?"inner-banner-content m-b-5":"inner-banner-content"}>
          <div className="container">
            <div className="row">
              <div className="col-12">
              <h1>{props.title}</h1>
              </div>
            </div>
          </div>
         </div>
        </div>
      {/* <div className="inner-banner-wrapper">
        <img src={bannerURL} alt="inner_banner" className="inner-banner" />
        <h1 className="inner-banner-title">{props.title}</h1>
      </div> */}
      <section className="content-main">
        <div className="container">
          <div className="row">
            <div className="col-12">
            {props.children}</div>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
}
