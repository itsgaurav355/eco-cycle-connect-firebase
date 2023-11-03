import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";
import {HiOutlineArrowLeft} from "react-icons/hi"


const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft className="fs-4"/> Go back to Blogs </Link>
                <h3 className="title">
                    A beautiful sunday morning in Mumbaai
                </h3>
                <img src="images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure porro minus qui quasi ex nulla maxime nisi, modi fugiat assumenda enim voluptas atque omnis labore ipsa cumque nobis sequi eos sit unde nesciunt hic! Animi, eum quidem, cupiditate vel aperiam perferendis ad placeat harum aliquid ducimus illum mollitia consequuntur nam.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
