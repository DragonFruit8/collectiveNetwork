
const PageHeader = ({ title, slogan, subTitle, tranSlogan }) => {
  return (
    <>
      <header
        id="pageHeader"
        className="d-flex flex-column justify-content-center text-light mb-4"
      >
        <h1 className="display-1">{title}</h1>
        <h2 className="display-1">{subTitle}</h2>
        <p className="fs-5">{slogan}</p>
        <p className="fs-5">{tranSlogan}</p>
      </header>
    </>
  );
}

export default PageHeader;
