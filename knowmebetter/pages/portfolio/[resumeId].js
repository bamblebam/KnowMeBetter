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
  console.log(props);
  //Router
  const router = useRouter();
  //States
  const [fullname, setFullname] = useState("");
  // const resumeId = router.query.resumeId;
  // console.log(resumeId);

  // let response = fetch("http://localhost:3000/api/getResumeDetail", {
  //   method: "POST",
  //   body: JSON.stringify({ resumeId: resumeId }),
  // }).then((res) => res.json());

  // const getData = async () => {
  //   const data = await response;
  //   setFullname(data.fullname);
  // };

  // const resumeData = getData();
  // console.log(resumeData);
  // console.log(fullname);

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
  const resumeId = context.query;
  console.log("server");
  console.log("server", resumeId);
  return {
    props: {
      resumeId: resumeId,
      dummy: "dummy",
    },
  };
}
