import { Fragment } from "react";
import router from "next/router";
import Head from "next/head";
import { useRouter } from "next/router";
export default function FinalResume({ props }) {


  const data = router.query;


  console.log(data);


  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="../styles/resume.module.css" />
      </Head>
      <div className="m-5 d-flex justify-content-center">
        <div style={{ backgroundColor: "#f5f5f5", height: "100%" }}>
          <div class="row">
            <div class="col text-left m-2">
              <h3>{data.title}</h3>
              <h4>{data.fullname}</h4>
            </div>
            <div class="col m-2" style={{ textAlign: "right" }}>
              <p>Phone number - {data.phone}</p>
              <p>Email Id - {data.email}</p>
              <p>City - {data.city}</p>
              <p>Country - {data.country}</p>
            </div>
          </div>
          <div className="row m-2">
            <p>{data.description}</p>
          </div>
          <div className="row m-2">
            <h3>Github Repos</h3>
            <div className="row mb-3">
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Github repo</h5>
                    <p class="card-text">Repo description</p>
                    <a href="#" class="card-link">
                      Repo link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Github repo</h5>
                    <p class="card-text">Repo description</p>
                    <a href="#" class="card-link">
                      Repo link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Github repo</h5>
                    <p class="card-text">Repo description</p>
                    <a href="#" class="card-link">
                      Repo link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Github repo</h5>
                    <p class="card-text">Repo description</p>
                    <a href="#" class="card-link">
                      Repo link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
