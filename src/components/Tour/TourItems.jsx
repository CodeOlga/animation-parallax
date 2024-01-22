import { Link } from "react-router-dom";

import SectionTitle from "../Title/SectionTitle";
import Section from "../Section/Section";
import TourItem from "./TourItem";
import Loader from "../Loader/Loader";

import { sortByDate } from "../../utils/common";

import { useTourItems } from "../../hooks/useTourItems";

const TourItems = () => {
  const { items = [], isLoading } = useTourItems();

  // робимо filtered для фільтрації елементів, що отримуємо, тоді на 31 рядку filtered мапимо замість items
  // const filtered = items
  //   .filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
  //   .filter((_, i) => i < 5)

  // sortByDate - сортуємо за датою
  const filtered = sortByDate(
    items
      .filter(({ soldOut }) => !soldOut)
      .filter((_, i) => i < 5)
  );

  return (
    <Section className="tour">
      <div className="container">
        <SectionTitle text='Concerts' />
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tour-list">
            {filtered.map((item, i) => (
              <TourItem {...item} i={i} key={item.sys.id} />
            ))}
          </ul>
        )}

        <Link to="/tour" className="button-more">
          All concerts
        </Link>
      </div>
    </Section>
  )
};

export default TourItems;