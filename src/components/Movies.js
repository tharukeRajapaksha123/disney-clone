import React from 'react'
import styled from 'styled-components'
function Movies() {
    return (
        <Container>
            <h4> Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/game-of-thrones-illustration-sean-longmore-1598631176.jpeg?crop=0.669xw:1.00xh;0.0896xw,0&resize=640:*" alt = "movie"/>
                </Wrap>
                <Wrap>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/game-of-thrones-illustration-sean-longmore-1598631176.jpeg?crop=0.669xw:1.00xh;0.0896xw,0&resize=640:*" alt = "movie"/>
                </Wrap>
                <Wrap>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/game-of-thrones-illustration-sean-longmore-1598631176.jpeg?crop=0.669xw:1.00xh;0.0896xw,0&resize=640:*" alt = "movie"/>
                </Wrap>
                <Wrap>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/game-of-thrones-illustration-sean-longmore-1598631176.jpeg?crop=0.669xw:1.00xh;0.0896xw,0&resize=640:*" alt = "movie"/>
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