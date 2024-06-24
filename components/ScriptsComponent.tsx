import React from "react";
import Globals from "../modules/Globals";

export default function ScriptsComponent() {
  return (
    <React.Fragment>
      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/jquery-3.5.1.min.js`}
      ></script>
      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/popper.min.js`}
      ></script>
      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/bootstrap.min.js`}
      ></script>
        <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/owl.carousel.min.js`}
      ></script>
      <script
        type="text/javascript"
        src={`${Globals.BASE_URL}assets/js/main.js`}
      ></script>
    </React.Fragment>
  );
}
