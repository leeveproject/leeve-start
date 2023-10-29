import React from "react";
import Header from "@/components/header";
import FirstSection from "@/components/firstSection";
import SecondSection from "@/components/secondSection";
import ThirdSection from "@/components/thirdSection";
import FourthSection from "@/components/fourthSection";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </React.Fragment>
  )
}
