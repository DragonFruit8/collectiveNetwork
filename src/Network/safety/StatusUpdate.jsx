import { useState, useEffect } from "react";

// import users from '../User.json';

function StatusUpdate() {
  
  const [isSafe, setSafe] = useState(true);
  const [isCaution, setCaution] = useState(false);
  const [isDanger, setDanger] = useState(false);
  const [cautionDisabled, setCautionDisabled] = useState(false);
  const [pose, setPos] = useState({
    xPos: null,
    yPos: null,
  });
  const [userStatus, setUserStatus] = useState ({
    safe: isSafe,
    caution: isCaution,
    danger: isDanger,
  });
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPos({
            xPos: position.coords.latitude,
            yPos: position.coords.longitude,
          });
        },
        (err) => {
          console.log("NOT SET: ", err);
        }
      );
    } else {
      console.log("Geolocation NOT FOUND");
    }
  }, []);

  function handleStatus(event) {
    if (event.target.id == "safe") {
      setSafe(true);
      setCaution(false);
      setDanger(false);
      setUserStatus({safe: true, caution: false, danger: false});
      setCautionDisabled(false);
    } else if (event.target.id == "caution") {
      setSafe(false);
      setCaution(true);
      setDanger(false);
      setUserStatus({safe: false, caution: true, danger: false});
    } else if (event.target.id == "danger") {
      setDanger(true);
      setSafe(false);
      setCaution(false);
      setCautionDisabled(true);
      setUserStatus({safe: false, caution: false, danger: true});
      alert("Broadcast sent to Network!");
    } else {
      setSafe(true);
      setCaution(false);
      setDanger(false);
      setUserStatus({safe: true, caution: false, danger: false});
    }
    console.log(userStatus)
  }

  return (
    <div className="container w-50 row gap-3 p-4 ms-auto me-auto bg-black">
      <div id="statusBar" className="d-flex gap-5 text-white">
        <label className="switch">
          <input
            type="radio"
            id="safe"
            name="status"
            value={isSafe}
            defaultChecked
            onChange={handleStatus}
          />
          <span className="slider" />
        </label>
        {isSafe ? console.log("isSafe: " + isSafe) : ""}
        {isSafe ? <p className="fs-5">Status: SAFE</p> : null}
      </div>
      <div id="statusBar" className="d-flex gap-5 ">
        <label className="switch">
          <input
            type="radio"
            id="caution"
            name="status"
            value={isCaution}
            onChange={handleStatus}
            disabled={cautionDisabled}
          />
          <span className="slider" />
        </label>
        {isCaution ? console.log("isCaution: " + isCaution) : ""}
        {isCaution & !isSafe & !isDanger ? (
          <p className="fs-5">
            <a
              className="btn btn-danger"
              href={`https://www.google.com/maps/place/${pose.xPos},${pose.yPos}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GET HELP!
            </a>
          </p>
        ) : null}
        {!isCaution & isDanger ? (
          <small>
            <em>"Become safe instead"</em>
          </small>
        ) : null}
      </div>
      <div id="statusBar" className="d-flex gap-5 ">
        <label className="switch">
          <input
            type="radio"
            id="danger"
            name="status"
            value={isDanger}
            onChange={handleStatus}
            disabled={isDanger}
          />
          <span className="slider" />
        </label>
        {isDanger ? console.log("isDanger: " + isDanger) : ""}
        <div>
          {isDanger ? (
            <p className="fs-5">
              <em>Network Notified! </em>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default StatusUpdate;
