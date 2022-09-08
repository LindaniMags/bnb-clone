import bike from "../images/mountain-bike 1.png";
import star from "../images/Star 1.png";
import "./styles.css";

export function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else {
    badgeText = "Available";
  }

  return (
    <div className="card-con">
      <img src={props.image} className="image" alt="image" />
      <div className="ratings">
        <img src={star} className="star" alt="star" />
        <span>{props.rating}</span>
        <span>({props.reviewCount}) • </span>
        <span>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
      <hr className="ruler" />
    </div>
  );
}
