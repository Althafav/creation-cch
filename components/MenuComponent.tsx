import Link from "next/link";
import React from "react";
import DOMPurify from "dompurify";
import Globals from "../modules/Globals";
import Helper from "../modules/Helper";

import { Menuitem } from "../models/menuitem";
import { Menurevamp } from "../models/menurevamp";
import { Menuitemrevamp } from "../models/menuitemrevamp";

export default class MenuComponent extends React.Component<
  {},
  {
    pageData: Menurevamp;
    isLoaded: boolean;
    showMenu: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      pageData: new Menurevamp(),
      isLoaded: false,
      showMenu: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ showMenu: !prevState.showMenu }));
  };

  componentDidMount() {
    Globals.KontentClient.item("menurevamp")
      .withParameter("depth", "2")
      .toObservable()
      .subscribe((response: any) => {
        this.setState({
          pageData: response.item,
          isLoaded: true,
        });
      });
  }

  showMobileMenu() {
    if ($(".mobile-menu-wrapper").hasClass("display-block")) {
      $(".mobile-menu-wrapper").css("display", "none");
      $(".mobile-menu-wrapper").removeClass("display-block");
      $(".mobile-menu-wrapper").addClass("display-none");
    } else {
      $(".mobile-menu-wrapper").css("display", "block");
      $(".mobile-menu-wrapper").addClass("display-block");
      $(".mobile-menu-wrapper").removeClass("display-none");
    }
  }

  render() {
    const { pageData, isLoaded } = this.state;
    const { showMenu } = this.state;

    if (!isLoaded) {
      return <React.Fragment />;
    }

    return (
      <React.Fragment>
        <div className="container-fluid">
          <header>
            <div className="upper-strip-wrapper">
              <div className="container">
                <div className="row">
                  <p>Creation House</p>
                </div>
              </div>
            </div>
            <div className="container">
              <nav className="nav-wrapper">
                <div className="logo">
                  {pageData.logo.value[0] && (
                    <a href="/">
                      <img
                        src={pageData.logo.value[0].url}
                        className="img-fluid"
                      />
                    </a>
                  )}
                </div>
                <ul className={`menu-item2 ${showMenu ? "show-menu" : ""}`}>
                  {pageData.menuitem.value.map((m: any, index: number) => {
                    var item: Menuitemrevamp = m;
                    return item.menuitem.value.length > 0 ? (
                      <li>
                        <a
                          href=""
                          className="text-white d-flex align-items-center gap-2"
                        >
                          {item.name.value}
                          <i className="fa fa-angle-down" aria-hidden="true" />
                        </a>

                        <ul className="inner-li">
                          {item.menuitem.value.map((m: any, index: number) => {
                            var item: Menuitemrevamp = m;
                            return (
                              <li className="li-a" key={index}>
                                <a href={item.link.value}>{item.name.value}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ) : (
                      <li key={index}>
                        <a href={item.link.value} className="text-white">
                          {item.name.value}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* Mobile menu items */}
                <ul
                  className={`mobile-menu2 shadow ${
                    showMenu ? "d-block" : "d-none"
                  }`}
                >
                  {pageData.menuitem.value.map((m: any, index: number) => {
                    var item: Menuitemrevamp = m;
                    return item.menuitem.value.length > 0 ? (
                      <li>
                        <a href="" className="d-flex gap-2 align-items-center">
                          {item.name.value}
                          <i className="fa fa-angle-down" aria-hidden="true" />
                        </a>

                        <ul className="inner-li">
                          {item.menuitem.value.map((m: any, index: number) => {
                            var item: Menuitemrevamp = m;
                            return (
                              <li className="li-a">
                                <a href="">{item.name.value}</a>
                              </li>
                            );
                          })}
                          
                        </ul>
                      </li>
                    ) : (
                      <li className="custom-hover-bg">
                        <a href={item.link.value}>{item.name.value}</a>
                      </li>
                    );
                  })}
                </ul>

                <div className="menu-icon" onClick={this.toggleMenu}>
                  <i className="fa fa-bars fs-3" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </header>
        </div>

        {/* {pageData.whatsappLink.value ? (
          <div className="whatsapp-fixed-wrap">
            <a href={pageData.whatsappLink.value} target={"_blank"}>
              <img src={`${Globals.BASE_URL}assets/imgs/whatsapp-icon.png`} />
            </a>
          </div>
        ) : (
          ""
        )} */}
      </React.Fragment>
    );
  }
}
