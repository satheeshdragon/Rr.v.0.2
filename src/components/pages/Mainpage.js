import React from "react";
import { Carousel } from "react-bootstrap";

const Mainpage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/7/71/Milna%2C_Bra%C4%8D%2C_Hrvatska_-_Blata%C5%A1ka_riva_800x400.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZi0LQOFi9OtwGi5AyeZJk2Benvo52fOEdKlMBQ3_LGRGzO99D&s"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Mainpage;
