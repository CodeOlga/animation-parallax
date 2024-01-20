import ScrollAnimation from "react-animate-on-scroll";

import Icon from "../Icon/Icon";

import { getLocaleDateString } from "../../utils/common";

const TourItem = ({
  date,
  place,
  city,
  soldOut,
  country,
  ticketLink,
  videoLink,
  i,
}) => {
  return (
    <li>
      <ScrollAnimation
        className="tour-item"
        animateIn="fadeInLeft"
        animateOut="fadeOutRight"
        delay={i * 100}
        offset={260}
      >
        <div className="tour-item__info">
          <div className="tour-item__date">
            {getLocaleDateString(date, {})}
          </div>

          <p className="tour-item__place">{place}</p>
        </div>

        <p className="tour-item__city">{city}</p>

        {!soldOut ? (
          <a href={ticketLink || videoLink} target="_blank" rel="noreferrer" className="tour-item__button">
            {ticketLink ? (
              <>
                <span>Tickets</span>
                <Icon name="arrow-right" />
              </>
            ) : (
              <span>VIDEO</span>
            )}
          </a>
        ) : (
          <button className="tour-item__button soldout">
            SOLD OUT
          </button>
        )}

      </ScrollAnimation>

    </li>
  )
}

export default TourItem;





