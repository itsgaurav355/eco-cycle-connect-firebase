import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";


const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      {product
        .filter((obj) => obj.title.toLowerCase().includes(searchkey))
        .filter((obj) => obj.category.toLowerCase().includes(filterType))
        .filter((obj) => obj.price.includes(filterPrice))
        .slice(0, 8)
        .map((item, index) => {
          const { title, price, description, imageUrl, id } = item;
          return (
            <div
              className={`${
                location.pathname == "/store" ? `gr-${grid}` : "col-3"
              }`}
            >
              <div key={index}>
                <Link to={`/productinfo/${id}`}>
                <div className="wishlist-icon position-absolute">
                  <img src="images/wish.svg" alt="Wishlist" />
                </div>
                <div
                  onClick={() => (window.location.href = `/productinfo/${id}`)}
                  className="product-image"
                >
                  <img
                    src={imageUrl}
                    className="img-fluid"
                    alt="Product Image"
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">ECC</h6>
                  <h5 className="product-title">{title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p
                    className={`description ${
                      grid == 12 ? "d-block" : "d-none"
                    }`}
                  >
                    {" "}
                    {item.description}
                  </p>
                  <p className="price">${price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <Link onClick={() => addCart(item)}>
                      <img src="images/add-cart.svg" alt="add-cart" />
                    </Link>
                    <Link key={index}>
                      <img src="images/view.svg" alt="view" />
                    </Link>
                    <Link>
                      <img src="images/prodcompare.svg" alt="Compare" />
                    </Link>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
