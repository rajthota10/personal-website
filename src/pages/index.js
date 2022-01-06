import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Raj Thota" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me." />
        <InterestsSection sectionId="details" heading="My Skills." />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Questions? Comments? Concerns? Want to talk?" />
      </Page>
    </>
  );
}
