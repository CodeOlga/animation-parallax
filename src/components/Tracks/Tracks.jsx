import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";

import { getTracksItems } from "../../reducers/tracksReducer";
import { getLocaleDateString } from "../../utils/common";

import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import Icon from "../Icon/Icon";

const Tracks = () => {
  const dispatch = useDispatch();
  const { items = [], isLoading } = useSelector(({ tracks }) => tracks);

  const [audio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    dispatch(getTracksItems())
  }, [dispatch])

  const handleTrackClick = (track) => {
    setPlaying((prev) => {
      const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prev : true;

      audio.src = track.link.url;
      !isPlaying ? audio.pause() : audio.play();

      return isPlaying;
    })

    setCurrentTrack(track);
  };

  return (
    <Section className="tracks-section">
      <div className="container">
        <SectionTitle text="Tracks" />

        {isLoading ? "LOADING..." : (
          <div className="tracks">
            {items.filter((_, i) => i < 3).map((track) => {

              const { cover, title, sys: { id }, date } = track;

              return (
                <ScrollAnimation
                  key={id}
                  className="track-item"
                  animateIn="fadeInLeft"
                  animateOut="fadeOutRight"
                >
                  <div className="track" onClick={() => handleTrackClick(track)}>
                    <div className="track-image">
                      <img src={cover.url} alt={title} />
                      {!!playing && currentTrack.sys.id === id && <Icon name="pause" />}
                    </div>
                    <p className="track-date">{getLocaleDateString(date, { month: "short" })}</p>
                    <h3 className="track-title">{title}</h3>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        )}
      </div>
    </Section>
  )
}

export default Tracks;