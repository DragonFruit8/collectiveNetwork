import { Link } from "react-router-dom";

function HomeSection () {
  return (
    <section
      className="jumbotron bg-primary text-white text-center py-5 px-5 gap-5"
    >
      <div className="container-lg">
        <div className="row col-sm-12 w-100 gap-5 my-5">
          <div className="col px-2 text-start">
            <div className="mb-5">
              <h1 className="fs-1 user-select-none">
                Empowering Gaza Relief
                <em className="text-warning user-select-none">&nbsp;Through&nbsp;</em>
                Unity
              </h1>
              <p className="lead fs-5 user-select-none">
                Building a&nbsp;
                <span className="text-warning user-select-all">
                  #CollectiveNetwork &nbsp;
                </span>
                to rewrite the global heart
              </p>
              <p className="user-select-none">
                Together, we amplify voices, connect creators with families in need,
                and create lasting change through unified action.
              </p>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-start gap-5">
              <Link to={'/submit'} className="btn btn-success btn-lg">
                Submit Family
              </Link>
              <Link to={'/families'} className="btn btn-outline-warning btn-lg">
                View Family
              </Link>
            </div>
          </div>
          <div className="col d-flex justify-content-center text-center ">
            <div className="container-sm w-100 h-auto">
              <div
                className="card h-100 row justify-content-center text-center"
              >
                <div className="">
                  <h2 className="text-center">Featured Family</h2>
                  <p className="text-center">Placeholder Card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
