import heroimg from "../images/Group 77.png";

export function Hero() {
  return (
    <div className="hero-con">
      <div>
        <img src={heroimg} alt="group" className="hero-img" />
      </div>
      <div>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one of a kind hosts all
          without leaving home
        </p>
      </div>
    </div>
  );
}
