import React, { useEffect } from "react";
import Hero from "./components/Hero";
import { MobileContext } from "./Utils/Context";
import { useContext } from "react";

export default function Index() {
  const { isLoading,isMobile} = useContext(MobileContext);
  // if (!isMobile){
  //   document.body.style.overflow = 'hidden';
  // }
  // else{
  //   document.body.style.overflow = 'auto';
  // }

  return (
    <>
        <Hero />
        <Hero />
        <Hero />
    </>
  )

}
