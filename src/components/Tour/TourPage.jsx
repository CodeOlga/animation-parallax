import { useCallback, useEffect, useState } from "react";

import { useTourItems } from "../../hooks/useTourItems";

import PageTitle from "../Title/PageTitle";
import Loader from "../Loader/Loader";
import TourItem from "../Tour/TourItem";

const TourPage = () => {
  const { items = [], isLoading } = useTourItems();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabs = [...new Set(items.map(({ country }) => country))];

  const [activeTab, setActiveTab] = useState(null);
  const [filtered, setFiltered] = useState([]);

  const toggleTab = useCallback((tab) => {
    setActiveTab(tab);
    setFiltered(items.filter(({ country }) => country === tab));
  }, [items]);

  useEffect(() => {
    if (tabs.length && !activeTab) setActiveTab(tabs[0])
  }, [activeTab, tabs, toggleTab]);

  return (
    <section className="tour-page page">
      <div className="container">
        <PageTitle text="All concerts" />

        {isLoading ? <Loader /> : (
          <>
            <ul className="tour-tabs">
              {tabs.map((tab) => (
                <li
                  onClick={() => toggleTab(tab)}
                  key={tab}
                  className={`tour-tab ${activeTab === tab ? "active" : ""}`}
                >
                  {tab}
                </li>
              ))}
            </ul>
            <ul className="tour-items">
              {filtered.map((item, idx) => (
                <TourItem
                  key={item.sys.id}
                  {...item}
                  i={idx}
                  offset={100}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}

export default TourPage;