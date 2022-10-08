import "./about.css";
import ESCR from "../../img/eatsleep.png";
import aboutme from "../../img/aboutme.gif"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img
            src={aboutme}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Jack of All Trades & Master of 🤓
        </p>
        <p className="a-desc">
          I am a person with multiple interests. I love to hangout with friends for outings or indoor activities. 
          Nature treats me with refreshing vibes where i find spirituality. Tasting different cuisines, learning new traditions
          and exploring new opportunities interests me. 😊
        </p>
        <div className="a-award">
          <img src={ESCR} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h3 className="a-award-title">TRADITION</h3 
            >
            <p className="a-award-desc">
              Learning New Technologies and Collaborating them to bring something new into picture seeks my INTEREST 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;