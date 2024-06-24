import { useRouter } from "next/router";
import React from "react";
import HeaderComponent from "./HeaderComponent";
import MenuComponent from "./MenuComponent";
import FooterComponent from "./FooterComponent";
import ScriptsComponent from "./ScriptsComponent";
import FooterComponet2 from "./FooterComponet2";

export default function LayoutComponent({ children }: any) {
  const router = useRouter();

  return (
    <React.Fragment>
      <HeaderComponent />
        <MenuComponent />
      {children}
      {/* <FooterComponent /> */}
      <FooterComponet2/>
      <ScriptsComponent />
    </React.Fragment>
  );
}
