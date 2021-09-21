import ParkData from "../public/parks.json";
import "./parks.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

function Parks() {
  const longitudeValue = ParkData.data[0].longitude;
  console.log(longitudeValue);

  return (
    <main>
      <div className="logo">
        <div className="imgAndTitle">
          <img
            src="https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png"
            alt="logo"
          />
          <a href="https://www.nps.gov">National Park Service</a>
        </div>
      </div>
      <div className="hero">
        <h2 className="title">California Parks</h2>
      </div>
      <div className="parkList">
        {ParkData &&
          ParkData.data.map((park, index) => (
            <div className="park" key={index}>
              <div className="parkHeading">
                <h3>{park.fullName}</h3>
              </div>
              <div className="parkDetails">
                {park.images.map(
                  (parkImg, index) =>
                    index < 1 && (
                      <img
                        className="parkImg"
                        src={parkImg.url}
                        alt={parkImg.altText}
                        key={index}
                      />
                    )
                )}
                <p className="parkURL">
                  <a href={park.url}>{`Visit ${park.fullName}`}</a>
                </p>
                <p className="parkDescription">{park.description}</p>
                <p className="parkGPS">
                  <b>GPS Coordinates:</b>
                  {`${park.latitude} N ${park.longitude} W`}
                </p>
                <div className="parkActivities">
                  <b>Park Activities:</b>
                  <ul>
                    {park.activities.map(
                      (parkActivities, index) =>
                        index < 3 && <li key={index}>{parkActivities.name}</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="footer">
        <div className="title">
          <h2>California Parks</h2>
        </div>
        <div className="legalAndSocial">
          <div className="legal">
            <a href="/">Privacy Policy</a>| <a href="/">Terms and Conditions</a>
            <br />
          </div>

          <div className="social">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="http://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <p className="copyright">©2021</p>
      </div>
    </main>
  );
}

export default Parks;
