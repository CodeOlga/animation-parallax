import { useShopItems } from "../../hooks/useShopItems";
import Loader from "../Loader/Loader";

import PageTitle from "../Title/PageTitle";

const ShopPage = () => {

  const { items, isLoading } = useShopItems();
  console.log(items);
  return (
    <section className="shop-page page">
      <div className="container">
        <PageTitle text="OXXXYSHOP" />

        {isLoading ? <Loader /> : (
          <div className="shop-list">
            {items.map(({ title, price, image: { url }, sys: { id } }) => {

              return (
                <div className="shop-list__item" key={id}>
                  <div
                    className="shop-list__item-img"
                    style={{ backgroundImage: `url(${url})` }}
                  />

                  <div className="shop-list__item-info">
                    <h2 className="shop-list__item-title">{title}</h2>
                    <p className="shop-list__item-price">{price}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default ShopPage;


