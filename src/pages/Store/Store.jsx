import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Meta from '../../components/Meta/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../../components/productCard/ProductCard';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext'
import { useContext } from 'react'


const Store = () => {
    const [grid,setGrid] = useState(4);
    const context = useContext(myContext)
    const { mode, filterType, setFilterType,
        filterPrice, setFilterPrice, product } = context
    
  return (
    <>
    <Layout>
      <Meta title={"Store"}></Meta>
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="fllter-title">Shop By Categories</h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Laptop</li>
                    <li>Camera</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="fllter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label className="form-check-label">In Stock (1)</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label className="form-check-label">
                        Out Of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                  <div>
                    <h5 className="sub-title">Colors</h5>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="fllter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      HeadPhones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Accessories
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Life Style
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Clothes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
            <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By
                    </p>
                    <select
                    value={filterPrice} onChange={(e)=> setFilterPrice(e.target.value)} 
                    name="" className="form-control form-select" id="">
                        {product.map((item, index) => {
                                    return (
                                        <option value={item.price}>{item.price}</option>
                                    )
                                })}
                    </select>
                  </div>
                  <div className="d-flex align-items-center hap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={()=>{setGrid(3);}}
                        src="images/gr4.svg"
                        className="s-block img-fluid"
                        alt="grid"
                      />
                      <img onClick={()=>{setGrid(4);}}
                        src="images/gr3.svg"
                        className="s-block img-fluid"
                        alt="grid"
                      />
                      <img onClick={()=>{setGrid(6);}}
                        src="images/gr2.svg"
                        className="s-block img-fluid"
                        alt="grid"
                      />
                      <img onClick={()=>{setGrid(12);}}
                        src="images/gr.svg"
                        className="s-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid}/>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
    
  );
}

export default Store;
