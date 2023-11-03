import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import BlogCard from "../../components/BlogCard/BlogCard";
import Layout from "../../components/layout/Layout";
const Blog = () => {
  return (
    <>
    <Layout>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="fllter-title">Find By Categories</h3>
              <div>
                <ul>
                  <li>Clothes</li>
                  <li>Electronics</li>
                  <li>Organisation</li>
                  <li>Genral</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};
export default Blog;
