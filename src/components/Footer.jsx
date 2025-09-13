import ThumbnailGallery from './ThumbnailGallery';
import data from '../data.json';

const Footer = () => {
  const currentYear = new Date ().getFullYear ();
  const family = data;

  return (
    <footer id="footer" className="bg-dark text-white py-5 mt-5">
      <div className="container-lg">
        <div className="row justify-content-between">
          <div className="col-lg-4 mb-4">
            <div className="d-flex mb-3">
              <i className="fas fa-heart text-danger me-2 fs-4" />
              <div>
                <h5 className="mb-0 fw-bold">CollectiveNetwork</h5>
                <small className="text-white">Gaza Relief Initiative</small>
              </div>
            </div>
            <p className="text-white mb-3 px-2">
              Empaths, truthtellers, and advocates united in providing critical
              support to Gaza families in their time of greatest need.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://www.tiktok.com/@etherialphoenix"
                className="text-white hover-primary"
              >
                <i className="fab fa-tiktok fs-2" />
              </a>

              <a
                href="https://ko-fi.com/terranovare"
                target="_blank"
                rel="noopener"
                className="text-white hover-primary"
              >
                <i className="fa-solid fa-circle-dollar-to-slot fs-2" />
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-8 flex-wrap mb-5 p-3">
            <h6 className="fw-bold mb-3">Families</h6>
            <div className="container row row-cols-4 row-cols-sm-4 row-cols-md-4 gap-4 pe-4">
              {family.map (f => {
                return <ThumbnailGallery key={f.id} src={f.thumbnail} familyLink={f.fields["shareNow"]} />;
              })}

              {/* <div className="flex-row text-center">
                <svg
                  aria-label="Placeholder"
                  className="bg-light bd-placeholder-img rounded-circle"
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
              <div className="flex-row text-center">
                <svg
                  aria-label="Placeholder"
                  className="bg-light bd-placeholder-img rounded-circle"
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
              <div className="flex-row text-center">
                <svg
                  aria-label="Placeholder"
                  className="bg-light bd-placeholder-img rounded-circle"
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
              <div  className="flex-row text-center">
                <svg
                  aria-label="Placeholder"
                  className="bg-light bd-placeholder-img rounded-circle"
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
              <div className="flex-row text-center">
                <svg
                  aria-label="Placeholder"
                  className="bg-light bd-placeholder-img rounded-circle"
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
              <div className="flex-row text-center">
                <svg
                  aria-label="Placeholder"
                  className="bg-light bd-placeholder-img rounded-circle"
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
              <div className="flex-row text-center">
                <svg
                  aria-label="Placeholder"
                  className="bg-light bd-placeholder-img rounded-circle"
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
              </div> */}
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-4 p-3">
            <h6 className="fw-bold mb-3">Quick as</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/"
                  className="text-white text-decoration-none hover-primary"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/families"
                  className="text-white text-decoration-none hover-primary"
                >
                  Families
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/submit"
                  className="text-white text-decoration-none hover-primary"
                >
                  Submit Family
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-white text-decoration-none hover-primary"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <div className="text-center">
          <small className="text-white">
            Powered by &copy; {currentYear} Terra'Novare. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
