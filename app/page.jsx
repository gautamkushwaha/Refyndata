import Link from "next/link";
import Head from "next/head";
// import styles from '../styles/Home.module.css';


import Home from "./home/home";
import AboutUs from "./home/about_us";
import ServiceSection from "./home/services";


export default function Page() {

  return (

    <>
      <Head >
        <title>GautamKushwaha | Home</title>
        <meta name="keywords" content="gautam" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body>
        <Home />
        <AboutUs />
        <ServiceSection /> 
        {/* {/* <Partners/> */}
      </body>
    </>

  );
}
