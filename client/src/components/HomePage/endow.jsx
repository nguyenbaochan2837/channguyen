import React from "react";
import { Card, Col, Row } from "antd"; // Đã xóa Button ở đây

const { Meta } = Card;

const Endow = () => {
  const destinations = [
    {
      name: "Hotel Nikko Saigon",
      description: "170 đánh giá",
      price: "4.600.000 VNĐ/đêm",
      stars: 5,
      image: "nikko.png",
      rating: "8/10",
    },
    {
      name: "Pullman Hotel Saigon",
      description: "65 đánh giá",
      price: "4.580.000 VNĐ",
      stars: 5,
      image: "pullman.png",
      rating: "9/10",
    },
    {
      name: "Sofitel Legend Metropole Hanoi",
      description: "53 đánh giá",
      price: "8.870.000 VNĐ",
      stars: 5,
      image: "hanoih.png",
      rating: "8.5/10",
    },
    {
      name: "InterContinental Danang Sun Peninsula Resort",
      description: "10 đánh giá",
      price: "13.605.000 VNĐ",
      stars: 5,
      image: "danang1.png",
      rating: "9/10",
    },
  ];

  return (
    <section className="endow-cards-wrapper">
      <div className="endow-cards">
        <h2 className="endow-title">Giá khách sạn đang được khuyến mãi</h2>
        <Row gutter={[16, 16]}>
          {destinations.map((destination, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                style={{ height: "auto" }}
                cover={
                  <img
                    alt={destination.name}
                    src={destination.image}
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <Meta
                  title={destination.name}
                  description={
                    <div>
                      <span className="stars">
                        {Array.from({ length: destination.stars }, (_, i) => (
                          <span key={i} className="star">
                            ⭐
                          </span>
                        ))}
                      </span>
                      <br />
                      <span className="rating" style={{ color: "#1877F2" }}>
                        {destination.rating}
                      </span>
                      <span
                        style={{ color: "gray" }}
                      >{` (${destination.description})`}</span>
                    </div>
                  }
                />
                <div className="card-footer">
                  <span className="price">{destination.price}</span>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Endow;
