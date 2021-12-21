import React from 'react'
import NavBar from '../../component/navbar/index'
import douglasImg from '../../assets/crew/image-douglas-hurley.png'
import markImg from '../../assets/crew/image-mark-shuttleworth.png'
import victorImg from '../../assets/crew/image-victor-glover.png'
import anoushehImg from '../../assets/crew/image-anousheh-ansari.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { data } from '../../Services/data'
import './Crew.css'

function Crew() {
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
  return (
    <div className="container__crew">
      <NavBar />
      <div className="title__crew">
        <p>02</p>
        <h3>Meet Your Crew</h3>
      </div>
      <div className="content__crew">
        <Slider {...settings}>
          <div className="content__slider-crew">
            <div className="content__img-crew">
              <img src={douglasImg} alt={data[0].crew[0].name} />
            </div>
            <div className="content__info-crew">
              <h3>{data[0].crew[0].role}</h3>
              <h1>{data[0].crew[0].name}</h1>
              <p>{data[0].crew[0].bio}</p>
            </div>
          </div>
          <div className="content__slider-crew">
            <div className="content__img-crew">
              <img src={markImg} alt={data[0].crew[1].name} />
            </div>
            <div className="content__info-crew">
              <h3>{data[0].crew[1].role}</h3>
              <h1>{data[0].crew[1].name}</h1>
              <p>{data[0].crew[1].bio}</p>
            </div>
          </div>
          <div className="content__slider-crew">
            <div className="content__img-crew">
              <img src={victorImg} alt={data[0].crew[2].name} />
            </div>
            <div className="content__info-crew">
              <h3>{data[0].crew[2].role}</h3>
              <h1>{data[0].crew[2].name}</h1>
              <p>{data[0].crew[2].bio}</p>
            </div>
          </div>
          <div className="content__slider-crew">
            <div className="content__img-crew">
              <img src={anoushehImg} alt={data[0].crew[3].name} />
            </div>
            <div className="content__info-crew">
              <h3>{data[0].crew[3].role}</h3>
              <h1>{data[0].crew[3].name}</h1>
              <p>{data[0].crew[3].bio}</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
export default Crew
