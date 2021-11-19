import { Fragment } from "react";
import Head from "next/head";
import styles from "../styles/resume.module.css";
import { useState } from "react";

export default function GetData() {
  const [fullname, setfullname] = useState("");
  //Create a form to get data from the user
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
      <div className="m-5">
        <div className="row">
          <div className="col">
            <h1>Form</h1>
            {/* Form */}
            <form action="">
              {/* Full Name */}

              <div className="mb-3">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  id="fullname"
                  onChange={(e) => setfullname(e.target.value)}
                />
                <div class="form-text">Enter your Full Name.</div>
              </div>

              {/* Description */}

              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  rows="3"
                ></textarea>
                <div class="form-text">Enter a description of yourself.</div>
              </div>

              {/* Contact Details */}

              <div className="mb-3">
                <div class="row">
                  <div class="col">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" class="form-control" id="phone" />
                  </div>
                  <div class="col">
                    <label htmlFor="email">Email Id</label>
                    <input type="text" class="form-control" id="email" />
                  </div>
                </div>
              </div>

              {/* Address */}

              <div className="mb-3">
                <div class="row">
                  <div class="col">
                    <label htmlFor="city">City</label>
                    <input type="text" class="form-control" id="city" />
                  </div>
                  <div class="col">
                    <label htmlFor="country">Country</label>
                    <input type="text" class="form-control" id="country" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col">
            <h1>Resume</h1>
            {/* Resume layout */}

            <div style={{ backgroundColor: "#f5f5f5", height: "100%" }}>
              <div class="row">
                <div class="col text-left">
                  <h1>Title</h1>
                  <h2>Full Name</h2>
                </div>
                <div class="col">
                  <h4 className="text-right">Contacts</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    // <Fragment>
    //   <div>
    //     <h1>Hi</h1>
    //   </div>
    // </Fragment>
  );
}
