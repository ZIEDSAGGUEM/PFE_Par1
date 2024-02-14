import React, { useEffect, useRef } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";
import categories from "../Categories";
import Carousel from "../components/Carousel";
import "./Home.css";
import aos from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  useEffect(() => {
    aos.init({ duration: 2500 });
  });

  return (
    <div className=" overflow-hidden">
      <div className="x">
        <Carousel />
      </div>
      <div className="featured-products-container container mt-4">
        <h2>Derniers Produits</h2>
        {/* last products here */}
        <div
          className="d-flex justify-content-center flex-wrap"
          data-aos="slide-right"
        >
          {lastProducts.map((product, key) => (
            <ProductPreview key={key} {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            Voir Plus {">>"}
          </Link>
        </div>
      </div>
      {/* sale banner */}
      <div className="sale__banner--container mt-4">
        <img
          src="https://image.jeuxvideo.com/medias-md/170532/1705315355-5724-card.gif"
          style={{ width: "50%", height: "auto" }}
          data-aos="zoom-in-up"
        />
      </div>
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category, key) => (
            <LinkContainer
              data-aos="slide-left"
              key={key}
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
