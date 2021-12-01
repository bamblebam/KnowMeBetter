import { Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Nav } from "../../components/Nav";
import { Intro, About } from "../../components/Intro";
import { Skills, Projects } from "../../components/Work";
import { Footer, Contact } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  about,
  contact,
  intro,
  navigation,
  projects,
  SEO,
  work,
} from "../../config/config";

export default function PortfolioDetail(props) {
  const { resume } = props.resumeData;
  console.log(resume);

  return (
    <Fragment>
      <Header seo={SEO} />
      {/* <Nav title={navigation.name} links={navigation.links} /> */}
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About title={about.title} description={about.description} />
      <Skills title={work.title} cards={work.cards} />
      <Projects title={projects.title} cards={projects.cards} />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const resumeId = context.query.resumeId;
  const response = await fetch(
    `http://localhost:3000/api/getResumeDetail/${resumeId}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return {
    props: {
      resumeData: data,
    },
  };
}
