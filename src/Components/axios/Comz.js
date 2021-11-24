// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";

// const baseURL = "http://192.168.0.110:8081/api/products/list/9";

const Comz = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [cat, setCat] = useState(false);
  const [catitem, setCatItem] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://192.168.0.110:8081/api/products/list/9")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    fetch("http://192.168.0.110:8081/api/products/product-category/list/9")
      .then((res) => res.json())
      .then(
        (result) => {
          setCat(true);
          setCatItem(result);
        },

        (error) => {
          setCat(true);
          setCatItem(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded && !cat) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> Product List </h1>
        <div
          style={{ display: "flex", flexWrap: "wrap" }}
          className="mx-3 my-3"
        >
          {items.map((item) => (
            <Row gutter={[16, 16]}>
              <Col span={4}>
                <Card
                  hoverable
                  style={{
                    width: "240px",
                    marginRight: "30px",
                    marginBottom: "30px",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={item.photo}
                      style={{ width: "240px", height: "240px" }}
                    />
                  }
                >
                  <h5>{item.name}</h5>
                  <p>id={item.id}</p>
                  <p>qty={item.qty}</p>
                  <p>sell_price={item.sell_price}</p>
                  <p>business={item.business}</p>
                  <p>category={item.category}</p>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}> Category List</h1>
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap" }}
          className="mx-3 my-3"
        >
          {catitem.map((item) => (
            <Row gutter={[16, 16]}>
              <Col span={4}>
                <Card
                  hoverable
                  style={{
                    width: "240px",
                    marginRight: "30px",
                    marginBottom: "30px",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={item.photo}
                      style={{ width: "240px", height: "240px" }}
                    />
                  }
                >
                  <h5>{item.name}</h5>
                  <p>id={item.id}</p>
                  <p>business={item.business}</p>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    );
  }
};

export default Comz;
