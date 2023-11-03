import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import myContext from '../../context/data/myContext'
import {useContext} from 'react'
import { useSelector } from 'react-redux';



const Header = () => {
    const context = useContext(myContext);
    const { mode, searchkey, setSearchkey, product } = context
    const user = JSON.parse(localStorage.getItem('user'));
  
    // console.log(user.user.email)
  
    const logout = () => {
      localStorage.clear('user');
      window.location.href = '/login'
    }
  
    const cartItems = useSelector((state) => state.cart)
  
  return (
    <>
  
      {/* Laptop view */}
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className=" text-white mb-0">
                Free Shipping over 2kg of recyclable Items
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hot-line
                <a className="text-white" href="tel:+91 9326376702">
                  +91 9326376702
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3 ">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Eco Cycle Connect</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  name="searchkey"
                  value={searchkey}
                  onChange={(e) => setSearchkey(e.target.value)}
                  id="searchkey"
                  className="form-control py-2"
                  placeholder="What you are looking for ?"
                  aria-label="What you are looking for ?"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <Link to={"/store"}>
                  <BsSearch className="fs-6" />
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-item-center justify-content-between">
                <div>
                  <Link to="/store" className="d-flex align-items-center gap-10 text-white" >
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Recycled <br /> Products
                    </p>
                  </Link>
                </div>
                {user ? (
                   <div>
                   <Link to="/cart" className="d-flex align-items-center gap-10 text-white" >
                     <img src="/images/wishlist.svg" alt="wishlist" />
                     <p className="mb-0">
                       Favourite <br /> Wishlist
                     </p>
                   </Link>
                 </div>
                ) : 
                ""}
                
                <div>
                 { user ? (
                  <Link onClick={logout} to="/login" className="d-flex align-items-center gap-10 text-white" >
                  <img src="/images/user.svg" alt="User" />
                  <p className="mb-0">
                    Logout
                  </p>
                </Link>
                 ): <Link to="/signup" className="d-flex align-items-center gap-10 text-white" >
                 <img src="/images/user.svg" alt="User" />
                 <p className="mb-0">
                   Sign Up
                 </p>
               </Link>}

                </div>
                
                <div>
                  <Link  to={"/cart"} className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">{cartItems.length}</span>
                      {/* <p className="mb-0">$500</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                
                <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      id="dropdownMenuButton1"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="Menu" />
                      <span className='me-5 d-inline-block'>Donate Product</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="/donate-product" className="dropdown-item text-white" >
                          E-waste
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to=''>
                          Clothes
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to=''>
                          Plastic Waste
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
