import { Fragment } from "react";
import { useRouter } from "next/router";

export default function PortfolioDetail() {
  const router = useRouter();
  const resumeId = router.query.resumeId;
  console.log(resumeId);

  const getData = async () => {
    let response = await fetch("http://localhost:3000/api/getResumeDetail", {
      method: "POST",
      body: JSON.stringify({ resumeId: resumeId }),
    })
      .then((res) => res.json())
      .then((data) => (response = data));
    console.log(response.resume[0]._id);
  };

  const resumeData = getData();

  return (
    <Fragment>
      <h1>Portfolio Detail</h1>
      <p>{resumeId}</p>
    </Fragment>
  );
}
