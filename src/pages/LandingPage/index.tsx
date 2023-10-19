import {
  HeroSection,
  InformationSection,
  CommonAreaSection,
  CustomersSection,
  FooterSection
} from "./components";

import {
  MuralSectionSC,
  MuralImageSC,
  BlueTitleSC,
} from "./styles";

const LandingPage = () => {
  return (
    <>
      <HeroSection />

      <InformationSection />

      <CommonAreaSection />

      <MuralSectionSC>
        <BlueTitleSC>Mantenha os moradores sempre informados</BlueTitleSC>
        <MuralImageSC src="src/assets/png/InformationsMural.png" />
      </MuralSectionSC>

      <CustomersSection />

      <FooterSection />
    </>
  );
};

export default LandingPage;
