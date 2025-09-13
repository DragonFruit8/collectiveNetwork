import React from "react";

function SponsorSection() {
  return (
    <section className="container-lg">
      <div className="d-md-flex flex-md-equal my-md-3 ps-md-3">
        <div className="w-100 text-bg-dark me-md-3 pt-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h4 className="display-5">Image Here</h4>
            <p className="lead">??Second Image??</p>
          </div>
          <div className="bg-body-tertiary shadow-sm mx-auto"></div>
        </div>
        <div className="w-100 bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="d-flex flex-column mt-1 gap-5">
            <div>
              <h4 className="fs-2 mb-4 text-start">
                Creators for Change: Voices Amplifying Gaza
              </h4>
              <p className="lead text-start">
                With homes destroyed and basic needs unmet, thousands in Gaza
                are relying on collective support. Your contribution helps
                deliver essential relief, one family at a time.
              </p>
            </div>
            <div className="d-flex gap-5">
              <button type="button" className="btn btn-danger">
                20
              </button>
              <button type="button" className="btn btn-danger">
                20
              </button>
              <button type="button" className="btn btn-danger">
                20
              </button>
              <button type="button" className="btn btn-danger">
                20
              </button>
            </div>
          </div>

          <div className="my-4 d-flex">
            <button>Button</button>
          </div>
          <div className="container my-3 text-start">
              <div className="d-flex mt-5 mb-4">
                <h5>Great Donors</h5>
              </div>
            <div className="row-md-12 col-sm-12">
              <div className="row row-cols-4 row-cols-sm-3 row-cols-md-8">
                
                <div className="flex-row text-start">
                  
                  <svg
                    aria-label="Placeholder"
                    className="bd-placeholder-img rounded-circle"
                    height="75"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="75"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect
                      width="100%"
                      height="100%"
                      fill="var(--bs-secondary-color)"
                    ></rect>
                  </svg>
                </div>
                <div className="flex-row text-start">
                  
                  <svg
                    aria-label="Placeholder"
                    className="bd-placeholder-img rounded-circle"
                    height="75"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="75"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect
                      width="100%"
                      height="100%"
                      fill="var(--bs-secondary-color)"
                    ></rect>
                  </svg>
                </div>
                <div className="flex-row text-start">
                  
                  <svg
                    aria-label="Placeholder"
                    className="bd-placeholder-img rounded-circle"
                    height="75"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="75"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect
                      width="100%"
                      height="100%"
                      fill="var(--bs-secondary-color)"
                    ></rect>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorSection;
