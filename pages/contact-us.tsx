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


  componentDidMount() {
    const myTimeout = setTimeout(() => {
      $(".contact-heading").addClass("d-none");

    }, 1000);
  }


  render(): React.ReactNode {

    return (
      <React.Fragment>
        <Head>
          <title>{`${Globals.SITE_NAME} | Contact us`}</title>
          <meta name="title" content="Contact us" />
          <meta name="description" content="Contact us" />
        </Head>

        <ContentMainComponent title="Contact us">
          <div className="contact-wrapper d-none">
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
        </ContentMainComponent>
      </React.Fragment>
    );
  }
}
