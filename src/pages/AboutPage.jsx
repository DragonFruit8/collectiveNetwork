import PageHeader from "../components/PageHeader";
import RecordsDataComponent from "../components/RecordsDataComponent";

function AboutPage() {

  
  return (
    <>
      <PageHeader 
        title={"ABOUT US"}
        slogan={"Learn more about our cause"}
      />
      <div className="container-sm py-5 text-start text-dark">
        <div className="row">
          <div className="d-flex col-md-6 col-sm-6 p-2-md px-sm-5 justify-content-center align-items-center">
            <img
              src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={"800px"}
              height={"600px"}
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-6 col-sm-6 p-3-lg p-4-md p-3-sm">
            <div className="container">
              <div className="row">
                <div className="flex-column text-dark mt-3">
                  <h1 className="pb-3">Vision</h1>
                  <small>
                    <p>
                      A world where grassroots networks rise stronger than
                      systems of oppression — uniting humanity to deliver
                      transparent, dignified, and lifesaving aid, fast.
                    </p>
                  </small>
                </div>
              </div>
              <div className="flex-column text-dark mb-5 pt-4">
                <p>
                  We are a collective of empaths, truth-tellers, and advocates.
                  At our core, we believe in the power of unified action to
                  create impact during the world's darkest hours
                </p>
                <p>
                  Through grassroots efforts and global support, we’re dedicated
                  to bringing hope and relief to communities in crisis —
                  starting with Gaza
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecordsDataComponent />
      <div className="container-sm my-5">
        <h1 className="pb-3">Our Mission</h1>
        <div
          id="imageGroup"
          className="row col-md-auto justify-content-md-center"
        >
          <div id="image_1" className="col col-lg-2" />
          <div id="image_2" className="col col-lg-2" />
        </div>
        <div className="row mt-5">
          <div id="causeSection" className="d-flex card-group p-1">
            <div className="card p-3">
              <p className="fs-4">Spread Awareness</p>
              <p>Amplify our reach through strategic social campaigns & content partnerships.</p>
            </div>
            <div className="card p-3">
              <p className="fs-4">Feature Families</p>
              <p>Highlight families in need to push support quickly through collective donations via IG+.</p>
            </div>
            <div className="card p-3">
              <p className="fs-4">Unite Creators</p>
              <p>Build a unified front of donors & influencers to gain support through sustained activation.</p>
            </div>
            <div className="card p-3">
              <p className="fs-4">Ensure Transparency</p>
              <p>Maintain complete transparency in operations, fund allocation, and third-party verification processes.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
