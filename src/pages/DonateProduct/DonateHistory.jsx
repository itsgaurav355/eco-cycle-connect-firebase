import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const DonateHistory = () => {
  const context = useContext(myContext);
  const donateProducts = useSelector((state) => state.donate);
  
  useEffect(() => {
    localStorage.setItem("donate-product", JSON.stringify(donateProducts));
  }, [donateProducts]);

  return (
    <>
      <Layout>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className=" cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Name</h4>
                <h4 className="cart-col-2">Phone No.</h4>
                <h4 className="cart-col-3">Product Type</h4>
                <h4 className="cart-col-4">Quantity</h4>
              </div>
              {
              donateProducts.map((item, index) => {
              const { name, type, phoneno, quantity } = item;
              return (
                <div className=" cart-header py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <h1>{name}</h1>
                  </div>
                  <div className="w-75">
                    <p>{phoneno}</p>
                    
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">{type}</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <AiFillDelete className="text-danger "  onClick={() => deleteCart(item)} />
                  </div>
                </div>
                <div className="cart-col-4">{quantity}</div>
              </div>
              );
            })}

            </div>
           
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}

export default DonateHistory
