import Head from "next/head";
import React from "react";
import Globals from "../modules/Globals";

export default function HeaderComponent() {
  return (
    <Head>
     <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4/css/metro-icons.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href={`${Globals.BASE_URL}assets/css/owl.carousel.min.css`} />
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
    <link href="https://fonts.cdnfonts.com/css/coolvetica" rel="stylesheet" />
    <link rel="stylesheet" href={`${Globals.BASE_URL}assets/css/main.min.css`} />
    </Head>
  );
}
