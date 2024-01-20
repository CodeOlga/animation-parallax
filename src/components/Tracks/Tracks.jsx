import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTracksItems } from "../../reducers/tracksReducer";

const Tracks = () => {
  const dispatch = useDispatch();
  const { items = [], isLoading } = useSelector(({ tracks }) => tracks);

  useEffect(() => {
    dispatch(getTracksItems())
  }, [dispatch])

  return <div>Tracks</div>
}

export default Tracks;