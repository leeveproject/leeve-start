import React from "react";
import Header from "@/components/header";
import FirstSection from "@/components/firstSection";
import SecondSection from "@/components/secondSection";
import ThirdSection from "@/components/thirdSection";
import FourthSection from "@/components/fourthSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </React.Fragment>
  )
}
