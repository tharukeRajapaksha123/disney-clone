import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    }
    return (
        <Carausel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="slider"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="slider"/>
            </Wrap>
        </Carausel>
    )
}

export default ImageSlider

const Carausel = styled(Slider)`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    .slick-list{
        overflow: visible;
    }
    ul li button{
        &:before{
            font-size: 10px;
            color: white;
        }
    }
    li.slick-active button::before{
        color: white;
    }
    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border : 4px solid transparent;
        &:hover{
            border: 4px solid rgba(249,249,249,0.8);
            transition-duration :1s;
        }
    }

`