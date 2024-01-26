// custom hook для отримання товарів для різних сторінок

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getShopItems } from "../reducers/shopReducer";

export const useShopItems = () => {
  const dispatch = useDispatch();
  const { items = [], isLoading } = useSelector(({ shop }) => shop);

  useEffect(() => {
    !items.length && dispatch(getShopItems())
  }, [items, dispatch]);

  return { items, isLoading }
};