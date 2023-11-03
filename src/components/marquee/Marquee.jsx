import React from 'react'
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div>
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
    </div>
  )
}

export default Marquee
