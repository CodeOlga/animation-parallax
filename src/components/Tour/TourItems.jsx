import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SectionTitle from "../Title/SectionTitle";
import Section from "../Section/Section";
import TourItem from "./TourItem";
import Loader from "../Loader/Loader";

import { getTourItems } from "../../reducers/tourReducer";

import { sortByDate } from "../../utils/common";

const TourItems = () => {
  const dispatch = useDispatch();

  const { items = [], isLoading } = useSelector(({ tour }) => tour);

  useEffect(() => {
    dispatch(getTourItems())
  }, [dispatch]);

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