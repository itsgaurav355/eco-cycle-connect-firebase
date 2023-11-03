import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import { Link, redirect } from 'react-router-dom'
import Marquee from 'react-fast-marquee'


function Home() {
  return (
    <Layout>
      
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p>Over 2kg of recyclable Items </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p>Get Excitement Awards</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Always there for help</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Get Amazing Vouchers</h6>
                    <p className="mb-0">On Donating Prroducts</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroSection />
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <Link to={"/store"}><img src="images/card-1.jpg" className="img-fluid" alt="" /></Link>
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">
                    From $399 or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <Link to={"/store"}>
                <img
                  src="images/card-2.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                </Link>
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
               <Link to={'/store'}>
               <img
                  src="images/card-3.jpg"
                  className="img-fluid"
                  alt="famous"
                /></Link> 
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">SmartPhones</h5>
                  <h6 className="text-dark">SmartPhone 15 Pro</h6>
                  <p className="text-dark">
                    Now in Green From $999.00 or $41.62/mo. for 24 mo. Footnote*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <Link to={"/store"}><img
                  src="images/card-4.jpg"
                  className="img-fluid"
                  alt="famous" 
                /></Link>
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room -filling Sound.</h6>
                  <p className="text-dark">
                    From $699 or $116.58/mo. for 12 mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/store'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 ww-25">
                    <img src="images/brand-01.png" alt="Brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-02.png" alt="Brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-03.png" alt="Brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-04.png" alt="Brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-05.png" alt="Brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-06.png" alt="Brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-07.png" alt="Brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-08.png" alt="Brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home