import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";
import { fireDB } from "../../fireabase/FirebaseConfig";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import Color from "../../components/Color/Color";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";

function ProductInfo() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [products, setProducts] = useState("");
  const params = useParams();

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      setProducts(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // add to cart
  const addCart = (products) => {
    dispatch(addToCart(products));
    toast.success("add to cart");
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems])
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: `${products.imageUrl}`,
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <Layout>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                
                  <img src={products.imageUrl} alt="" />
                
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src={products.imageUrl}
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src={products.imageUrl}
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src={products.imageUrl}
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src={products.imageUrl}
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                   { products.title}
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">${products.price}</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">( 2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type : </h3>
                    <p className="product-data">{products.title} </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand : </h3>
                    <p className="product-data">{products.category} </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category : </h3>
                    <p className="product-data">{products.category} </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags : </h3>
                    <p className="product-data">{products.title} </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability : </h3>
                    <p className="product-data">In Stock </p>
                  </div>
                  
                  <div className="d-flex gap-10 flex-column  mt-2 mb-3">
                    <h3 className="product-heading">Size : </h3>
                    <div className="d-flex felx-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color : </h3>
                    <Color></Color>
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity : </h3>
                    <div className="">
                      <input
                        defaultValue={1}
                        type="number"
                        name="quantity"
                        id="quantity"
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                      />
                    </div>
                    <div className="d-flex- align-items-center gap-30 ms-5">
                      <div className="mt-0 d-flex justify-content-center gap-15 align-items-center">
                        <button  onClick={()=> addCart(products)} className="button border-0">Add to Cart</button>
                        <Link
                          to="/cart"
                          style={{ color: "white" }}
                          className="button"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns : </h3>
                    <p className="product-data">
                    {products.description}
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link </h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(
                         products.imageUrl
                        );
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                 {products.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        href=""
                        className="text-dark text-decoration-underline"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Gaurav</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium rerum velit laboriosam! Nobis dicta molestias
                      inventore ab magnam voluptatem a incidunt, vero aliquid
                      maiores quisquam laborum nemo quaerat doloremque tempora
                      non. Tempora maiores nihil similique non hic culpa dolor
                      exercitationem?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard></ProductCard>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;
