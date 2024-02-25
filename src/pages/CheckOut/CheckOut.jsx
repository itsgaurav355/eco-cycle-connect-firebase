import React, { useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../fireabase/FirebaseConfig";
import { toast } from "react-toastify";

const Checkout = () => {
  const context = useContext(myContext);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price);
    });
    setTotalAmount(temp);
    console.log(temp);
  }, [cartItems]);

  const shipping = parseInt(100);

  const grandTotal = shipping + totalAmount;

  //Payment Intigration

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      };
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: "rzp_test_qmMmjcAdsfwVzn",
      key_secret: "QJCsq7QT0hcIVKDzel6XSkz2",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "Eco-Cycle-Connect",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);
        toast.success("Payment Successful");

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };

        try {
          const orderRef = collection(fireDB, "order");
          addDoc(orderRef, orderInfo);
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Layout>
        <div className="checkout-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-7">
                <div className="checkout-left-data">
                  <h3 className="website-name">Eco Cycle Connect</h3>
                  <nav
                    style={{ "--bs-breadcrumb-divider": "" > "" }}
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link className="text-dark total-price" to="/cart">
                          Cart
                        </Link>
                      </li>
                      &nbsp;&nbsp;
                      <li
                        className="breadcrumb-item total-price active"
                        aria-current="page"
                      >
                        Information
                      </li>
                      <li className="breadcrumb-item total-price active">
                        Shipping
                      </li>
                      &nbsp;
                      <li
                        className="breadcrumb-item total-price active"
                        aria-current="page"
                      >
                        Payment
                      </li>
                    </ol>
                  </nav>
                  <h4 className="title total">Contact</h4>
                  <p className="user-details total">
                    Gaurav Prajapati (prajapatigaurav355@gmail.com)
                  </p>
                  <h4 className="mb-3">Shipping Details</h4>
                  <form
                    className="d-flex gap-15  flex-wrap justify-content-between"
                  >
                    <div className="w-100">
                      <div className="flex-grow-1">
                        <input
                          type="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                          className="form-control"
                          name="name"
                          id="name"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex-grow-1">
                      <input
                        type="phoneno"
                        placeholder="Enter Your Phone Number"
                        className="form-control"
                        name="phoneno"
                        id="phoneno"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="w-100">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        className="form-control"
                        name="address"
                        id="address"
                        required
                      />
                    </div>

                    <div className="flex-grow-1">
                      <input
                        type="text"
                        placeholder="City"
                        className="form-control"
                        name="city"
                        id="city"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <select
                        className="form-control form-select"
                        name="state"
                        id="state"
                      >
                        {" "}
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Up">Up</option>
                        <option value="Mp">Mp</option>
                        <option value="Maharashtra">J&K</option>
                      </select>
                    </div>
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        placeholder="Zipcode"
                        className="form-control"
                        name="pincode"
                        id="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                      />
                    </div>
                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to="/cart" className="text-dark">
                          <BiArrowBack className="me-2" /> Return to Cart
                        </Link>
                        <button
                          className="button"
                          onSubmit={buyNow()}
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-5">
                <div className="border-bottom py-4">
                  <div className="d-flex gap-10 mb-2 align-items-center">
                    <div className="w-75 d-flex gap-10">
                      <div className="w-25 position-relative">
                        <span
                          style={{ top: "-10px", right: "2px" }}
                          className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                        >
                          1
                        </span>
                        <img
                          className="img-fluid"
                          src="/images/watch.jpg"
                          alt="product"
                        />
                      </div>
                      <div>
                        <h5 className="total-price mt-9">Total</h5>
                        <p className="total-price"></p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="total">₹{totalAmount}</h5>
                    </div>
                  </div>
                </div>
                <div className="border-bottom py-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="total">Sub Total </p>
                    <p className="total-price">₹{totalAmount}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 total">Shipping</p>
                    <p className="mb-0 total-price">₹{shipping}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="total">Total</h4>
                  <h5 className="total-price">₹{grandTotal}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
