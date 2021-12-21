import React from 'react'
import NavBar from '../../component/navbar/index'
import image1 from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import image2 from '../../assets/technology/image-spaceport-landscape.jpg'
import image3 from '../../assets/technology/image-space-capsule-landscape.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { data } from '../../Services/data'
import './Technology.css'

function Technology() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    slidesToScroll: 1,
    arrows: false,
  }
  console.log(data)
  return (
    <div className="content__technology">
      <NavBar />
      <div className="title__technology">
        <p>03</p>
        <h3>Space launch 101</h3>
      </div>
      <div className="container__info-technology">
        <Slider {...settings}>
          <div>
            <img src={image1} alt={data[0].technology[0].name} />
            <h3>the terminology...</h3>
            <h1>{data[0].technology[0].name}</h1>
            <p>{data[0].technology[0].description}</p>
          </div>
          <div>
            <img src={image2} alt={data[0].technology[1].name} />
            <h3>the terminology...</h3>
            <h1>{data[0].technology[1].name}</h1>
            <p>{data[0].technology[1].description}</p>
          </div>
          <div>
            <img src={image3} alt={data[0].technology[2].name} />
            <h3>the terminology...</h3>
            <h1>{data[0].technology[2].name}</h1>
            <p>{data[0].technology[2].description}</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}
export default Technology
