import React from 'react'

function DonationPool() {
  return (
    <section className="container-fluid mt-5">
         <div className="row flex-column align-items-center justify-content-center">
        <h3 className="text-center fs-1">
          <em>Donation Pool Goal</em>
        </h3>
        <p className="text-center">
          <em>
            Help reach our goal to donate ALL funds towards the Feature Family
          </em>
        </p>
        
          <iframe
            src="https://ko-fi.com/streamalerts/goaloverlay/sa_1277f39d-2f2b-4a7b-a243-4c1e01fd227a"
            className="col-lg-8 col-md-4 col-sm-10 h-auto ms-auto me-auto mt-4"
            loading="eager"
          />
        <div className="row col-lg-8 col-md-4 col-sm-10 d-flex mb-5">
          <a
            href="https://ko-fi.com/terranovare"
            target="_blank"
            rel="noopener"
            className="btn btn-success btn-lg"
          >
            <i className="fa-solid fa-hand-holding-dollar"></i> Donate to Pool Goal
          </a>
        </div>

      </div>
      </section>
  )
}

export default DonationPool