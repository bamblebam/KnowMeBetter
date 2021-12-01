import { Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Intro, About } from "../../components/Intro";
import { Projects } from "../../components/Work";
import { Header } from "../../components/Header";
import { projects } from "../../config/config";

export default function PortfolioDetail(props) {
  const resume = props.resumeData.resume[0];
  console.log(resume);

  //SEO
  const SEO = {
    title: resume.fullname,
    description: resume.description,
  };

  //intro
  const intro = {
    title: resume.fullname,
    description: resume.title,
    image:
      "https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA=",
    buttons: [
      {
        title: "Github",
        link: "#contact",
        isPrimary: true,
      },
      {
        title: "LinkedIn",
        link: "#contact",
        isPrimary: false,
      },
      {
        title: "Email",
        link: "#contact",
        isPrimary: false,
      },
    ],
  };

  //about
  const about = {
    title: resume.fullname,
    description: resume.description,
  };

  return (
    <Fragment>
      <Header seo={SEO} />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About title={about.title} description={about.description} />
      <Projects title={projects.title} cards={projects.cards} />
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
