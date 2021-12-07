import React from 'react'
import styled from 'styled-components'
function Movies({title}) {
    return (
        <Container>
            <h4> {title} </h4>
            <Content>
                <Wrap>
                    <img src="https://cdn.shopify.com/s/files/1/1057/4964/products/Toy-Story-Vintage-Movie-Poster-Original-1-Sheet-27x41_2e3c6697-790d-4fcc-82bb-75b72a88835c.jpg?v=1629687817" alt = "movie"/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_encanto_payoff_21512_e2c5d246.jpeg" alt = "movie"/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg" alt = "movie"/>
                </Wrap>
                <Wrap>
                    <img src="https://i2.wp.com/www.chipandco.com/wp-content/uploads/2010/09/TANGLED_poster.jpg" alt = "movie"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`
    padding-bottom: 10px;
    margin: 30px ;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border : 3px solid rgba(249,249,249,0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 
    height:200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
        box-shadow: rgb(0 0 0/80%) 0px 26px 30px -10px,rgb(0 0 0 /72%) 0px 16px 10px -10px;
        transition-duration :1s;
    }
`