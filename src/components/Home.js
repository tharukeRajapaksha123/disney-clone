import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase'
function Home() {

 

    return (
        <Container>
            <ImageSlider/>
            <Viewers/>
            <Movies title="Recommended for you"/>
            <Movies title="Most Popular"/>
            <Movies title="Family Theater"/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw+5px);
    position: relative;
    &:before{
        background: url("/images/home-background.png") center center / cover  no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`