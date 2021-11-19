import { Fragment } from "react";
import router from "next/router";

export default function FinalResume({ props }) {
  const data = router.query;
  console.log(data);
  return (
    <Fragment>
      <h1>Final Resume</h1>
    </Fragment>
  );
}
